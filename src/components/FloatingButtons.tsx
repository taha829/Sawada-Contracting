import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
        asChild
      >
        <a href="tel:0790820045" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
      <Button
        size="lg"
        variant="secondary"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
        asChild
      >
        <Link to="/contact" aria-label="Contact us">
          <MessageCircle className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingButtons;
