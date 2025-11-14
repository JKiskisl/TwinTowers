import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Agents", href: "/explore" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  {/* REDESIGN: Jords+Co navbar - cleaner, shadow-sm, more spacing */}
  return (
    <nav className="fixed top-0 w-full bg-background shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* REDESIGN: Logo with metallic icon */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="gradient-metallic p-2 rounded-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">
              ExpertAI
            </span>
          </Link>

          {/* REDESIGN: Desktop nav with bold font, hover scale */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary font-semibold text-base hover:scale-105 transition-transform"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* REDESIGN: CTAs with outline + metallic gradient */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/create-profile">Create AI Agent</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 text-foreground/80 hover:text-foreground transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/create-profile">Create AI Agent</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
