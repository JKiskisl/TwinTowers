import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExpertCard from "@/components/ExpertCard";

const featuredAgents = [
  {
    id: "techcorp-procurement",
    name: "TechCorp Procurement Agent",
    title: "AI Agent for Global Sourcing",
    bio: "Trained on Q3 2025 RFPs, vendor lists, and procurement insights for IT services and supply chain.",
    expertise: ["IT Services", "Supply Chain", "Office Supplies"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
    connections: 2500,
  },
  {
    id: "globalmanf-sourcing",
    name: "GlobalManf Sourcing Agent",
    title: "Manufacturing Procurement AI",
    bio: "Access procurement data for raw materials, industrial equipment, and vendor evaluation processes.",
    expertise: ["Raw Materials", "Industrial Equipment", "Logistics"],
    imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400",
    connections: 3200,
  },
  {
    id: "retailchain-buyer",
    name: "RetailChain Buyer Agent",
    title: "Retail Procurement Assistant",
    bio: "Trained on retail procurement for consumer goods, packaging, and vendor relationships.",
    expertise: ["Consumer Goods", "Packaging", "Vendor Management"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400",
    connections: 1800,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* REDESIGN: Featured Agents with bold heading, more spacing */}
      <section className="py-32 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Featured Agents</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with AI-powered procurement agents from leading companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
            {featuredAgents.map((agent) => (
              <ExpertCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
