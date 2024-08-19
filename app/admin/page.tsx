"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Upload,
  PlusCircle,
  HomeIcon,
  BriefcaseIcon,
} from "lucide-react";

export default function Component() {
  const [brandClient, setBrandClient] = useState({
    title: "",
    link: "",
    buttonColor: "#3b82f6",
    bgColor: "#f3f4f6",
    image: null as string | null,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrandClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrandClient((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Brand Client submitted:", brandClient);
    // Here you would typically send the data to your backend
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
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
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <HomeIcon className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold">Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Website
              </Link>
              <Link
                href="/brands"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Brands
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Add Brand Client</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
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
                  <Label htmlFor="link">Link</Label>
                  <Input
                    id="link"
                    name="link"
                    type="url"
                    value={brandClient.link}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buttonColor">Button Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="buttonColor"
                      name="buttonColor"
                      type="color"
                      value={brandClient.buttonColor}
                      onChange={handleInputChange}
                      className="w-12 h-12 p-1 rounded"
                    />
                    <span>{brandClient.buttonColor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bgColor">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="bgColor"
                      name="bgColor"
                      type="color"
                      value={brandClient.bgColor}
                      onChange={handleInputChange}
                      className="w-12 h-12 p-1 rounded"
                    />
                    <span>{brandClient.bgColor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Upload Image</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("image")?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Upload Image
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Brand Client
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Preview Section */}
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
                  style={{ backgroundColor: brandClient.bgColor }}
                >
                  {brandClient.image ? (
                    <motion.img
                      src={brandClient.image}
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
                    backgroundColor: brandClient.buttonColor,
                    clipPath:
                      "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="flex items-center justify-center gap-x-5"
                    href={brandClient.link || "#"}
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
