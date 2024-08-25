// app/admin/clients/edit/[id]/ClientEditForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Save, BriefcaseIcon } from "lucide-react";
import { editClient } from "@/app/[locale]/actions/clientActions";

type Client = {
  id: string;
  title: string;
  Link: string;
  ButtonColor: string;
  BackgroundColor: string;
  ImageUrl: string;
};

export default function ClientEditForm({ client }: { client: Client }) {
  const router = useRouter();
  const [brandClient, setBrandClient] = useState(client);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrandClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrandClient((prev) => ({
          ...prev,
          ImageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await editClient(brandClient.id, brandClient);

    if (!result.success) {
      setError(result.error || "Failed to edit client. Please try again.");
    } else {
      router.push("/admin/clients");
      router.refresh();
    }

    setIsSubmitting(false);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Edit Brand Client</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Brand Client Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={brandClient.title}
                    onChange={handleInputChange}
                    placeholder="Enter brand client title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="Link">Link</Label>
                  <Input
                    id="Link"
                    name="Link"
                    type="url"
                    value={brandClient.Link}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ButtonColor">Button Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="ButtonColor"
                      name="ButtonColor"
                      type="color"
                      value={brandClient.ButtonColor}
                      onChange={handleInputChange}
                      className="w-12 h-12 p-1 rounded"
                    />
                    <span>{brandClient.ButtonColor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="BackgroundColor">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="BackgroundColor"
                      name="BackgroundColor"
                      type="color"
                      value={brandClient.BackgroundColor}
                      onChange={handleInputChange}
                      className="w-12 h-12 p-1 rounded"
                    />
                    <span>{brandClient.BackgroundColor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ImageUrl">Upload Image</Label>
                  <Input
                    id="ImageUrl"
                    name="ImageUrl"
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("ImageUrl")?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Upload Image
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" /> Save Changes
                    </>
                  )}
                </Button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                className="flex flex-col items-center group relative"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onHoverStart={() => setHoveredIndex(0)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div
                  className={`rounded-full w-72 h-72 flex items-center justify-center mb-6 relative overflow-hidden transform transition-all duration-300 ease-in-out ${
                    hoveredIndex === 0 ? "scale-105 shadow-xl" : ""
                  }`}
                  style={{ backgroundColor: brandClient.BackgroundColor }}
                >
                  {brandClient.ImageUrl ? (
                    <motion.img
                      src={brandClient.ImageUrl}
                      alt="Brand Logo"
                      className="w-56 h-auto absolute"
                      style={{ rotate: -12 }}
                      animate={{
                        y: hoveredIndex === 0 ? -10 : 0,
                        rotateY: hoveredIndex === 0 ? 10 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ) : (
                    <BriefcaseIcon className="w-32 h-32 text-gray-400" />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300"
                    animate={{ opacity: hoveredIndex === 0 ? 1 : 0 }}
                  />
                </div>
                <motion.button
                  className="mt-5 text-white font-bold py-2 px-6 rounded-sm uppercase text-lg relative overflow-hidden"
                  style={{
                    backgroundColor: brandClient.ButtonColor,
                    clipPath:
                      "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="flex items-center justify-center gap-x-5"
                    href={brandClient.Link || "#"}
                    target="_blank"
                  >
                    {brandClient.title || "Visit Website"}{" "}
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
