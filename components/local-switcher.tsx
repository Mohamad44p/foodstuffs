"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("languages");

  const onValueChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="hidden md:block">
      <Select
        defaultValue={localActive}
        onValueChange={onValueChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[180px] bg-transparent border-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary">
          <Globe className="mr-2 h-4 w-4" />
          <SelectValue placeholder={t("changeLanguage")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="ar">{t("arabic")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
