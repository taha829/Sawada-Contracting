import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center section-gradient">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold text-primary typing-animation">404</h1>
        <p className="mb-4 text-2xl font-semibold animate-fade-in" style={{ animationDelay: "0.3s" }}>Oops! Page not found</p>
        <p className="mb-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          The page you're looking for doesn't exist.
        </p>
        <Button asChild className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
