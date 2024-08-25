"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SendIcon } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const t = useTranslations("contactUs");
  const locale = useLocale();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast({
          title: t("successTitle"),
          description: t("successDescription"),
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || t("errorDefault"));
      }
    } catch (error) {
      toast({
        title: t("errorTitle"),
        description: (error as Error).message || t("errorDefault"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className={`py-24 bg-gradient-to-br from-background to-secondary ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{t("cardTitle")}</CardTitle>
              <CardDescription>{t("cardDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("nameLabel")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("namePlaceholder")}
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("emailLabel")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("messageLabel")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full ${
                    locale === "ar" ? "flex-row-reverse" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("sendingButton") : t("sendButton")}
                  <SendIcon
                    className={`${locale === "ar" ? "mr-2" : "ml-2"} h-4 w-4`}
                    aria-hidden="true"
                  />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
