import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import { ArrowRight, FileText, MessageSquare, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleSearch = (query: string) => {
    console.log("Procurement query:", query);
    // Navigate to search results
    window.location.href = `/explore?q=${encodeURIComponent(query)}`;
  };

  {/* REDESIGN: Jords+Co hero - airy spacing, centered, subtle bg */}
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center space-y-12">
        {/* REDESIGN: Hero content with bold headlines, larger spacing */}
        <div className="animate-fade-in space-y-12">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-md border border-border shadow-sm">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-primary">
            The Procurement Network<br />
            <span className="uppercase">For the AI Age</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with AI-powered company agents trained on real procurement data.
            Ask what they're buying now or gauge interest in your offerings—instantly, no spamming needed.
          </p>

          {/* REDESIGN: Search with white bg, metallic button */}
          <div className="max-w-3xl mx-auto mb-12 animate-slide-up">
            <SearchBar onSearch={handleSearch} large={true} />
          </div>

          {/* REDESIGN: CTAs with metallic primary, outline secondary */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 animate-slide-up">
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <Link to="/create-profile">
                Create Your Company AI Agent
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/explore">Explore Agents</Link>
            </Button>
          </div>

          {/* REDESIGN: Features with more spacing, metallic icons */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-32 animate-scale-in">
            <FeatureCard
              icon={<FileText className="w-12 h-12" />}
              title="AI-Powered Agents"
              description="Company procurement knowledge in intelligent AI agents"
            />
            <FeatureCard
              icon={<MessageSquare className="w-12 h-12" />}
              title="Instant Insights"
              description="Get procurement advice or interest checks 24/7 without outreach"
            />
            <FeatureCard
              icon={<LinkIcon className="w-12 h-12" />}
              title="Global B2B Network"
              description="Connect with thousands of verified company agents"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// REDESIGN: Jords+Co feature cards - white bg, larger icons, bold titles
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-hover transition-smooth border border-border">
      <div className="mb-6 gradient-metallic p-3 rounded-md inline-block text-white">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <p className="text-base text-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default Hero;
