import { Link } from "react-router-dom";
import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  {/* REDESIGN: Jords+Co footer - dark bg (#0E0E16), white text */}
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* REDESIGN: Brand with metallic icon, white text */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="gradient-metallic p-2 rounded-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ExpertAI</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              The future of B2B procurement with AI-powered agent connections.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-smooth">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-smooth">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-smooth">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* REDESIGN: Footer columns with white text, bold headings */}
          <div>
            <h3 className="font-bold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/explore" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#how-it-works" className="text-sm text-white/70 hover:text-white transition-smooth">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-white transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* REDESIGN: Copyright with white text */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 ExpertAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
