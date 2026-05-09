import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LanguageToggle = ({ className }: Props) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language switch"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur p-0.5 text-xs font-semibold shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-smooth",
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-smooth",
          lang === "hi"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        हिंदी
      </button>
    </div>
  );
};
