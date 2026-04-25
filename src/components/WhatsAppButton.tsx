import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919879270170?text=Hi%20ClaimsMitra%2C%20I%20need%20help%20with%20my%20insurance%20claim."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-success/40 animate-pulse-ring" />
      <span className="relative flex items-center gap-2 bg-[hsl(142_70%_45%)] text-white pl-4 pr-5 py-3.5 rounded-full shadow-elegant transition-smooth hover:scale-105">
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
        <span className="hidden sm:inline font-semibold text-sm">Chat on WhatsApp</span>
      </span>
    </a>
  );
};
