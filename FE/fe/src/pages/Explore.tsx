import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ExpertCard from "@/components/ExpertCard";
import { Button } from "@/components/ui/button";

// Mock data for procurement agents
const mockAgents = [
  {
    id: "techcorp-procurement",
    name: "TechCorp Procurement Agent",
    title: "AI Agent for Global Sourcing",
    bio: "Trained on Q3 2025 RFPs, vendor lists, and procurement insights for IT services and supply chain inquiries.",
    expertise: ["IT Services", "Supply Chain", "Office Supplies", "SaaS Procurement"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
    connections: 2500,
  },
  {
    id: "globalmanf-sourcing",
    name: "GlobalManf Sourcing Agent",
    title: "Manufacturing Procurement AI",
    bio: "Access procurement data for raw materials, industrial equipment, and vendor evaluation processes.",
    expertise: ["Raw Materials", "Industrial Equipment", "Logistics", "Contract Management"],
    imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400",
    connections: 3200,
  },
  {
    id: "retailchain-buyer",
    name: "RetailChain Buyer Agent",
    title: "Retail Procurement Assistant",
    bio: "Trained on retail procurement for consumer goods, packaging, and vendor relationships across multiple channels.",
    expertise: ["Consumer Goods", "Packaging", "Vendor Management", "Inventory"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400",
    connections: 1800,
  },
  {
    id: "healthsys-procurement",
    name: "HealthSys Procurement Agent",
    title: "Healthcare Sourcing AI",
    bio: "Medical equipment, pharmaceutical supplies, and healthcare facility procurement expertise.",
    expertise: ["Medical Equipment", "Pharmaceuticals", "Healthcare", "Compliance"],
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400",
    connections: 2100,
  },
  {
    id: "constructco-buyer",
    name: "ConstructCo Buyer Agent",
    title: "Construction Procurement",
    bio: "Building materials, construction equipment, and subcontractor procurement intelligence.",
    expertise: ["Building Materials", "Construction Equipment", "Subcontracting", "Safety"],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400",
    connections: 1600,
  },
  {
    id: "fintech-sourcing",
    name: "FinTech Sourcing Agent",
    title: "Financial Services Procurement",
    bio: "Software, security systems, and professional services procurement for financial sector.",
    expertise: ["Software Licensing", "Security", "Consulting", "IT Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400",
    connections: 2900,
  },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const categories = ["All", "IT Services", "Manufacturing", "Retail", "Healthcare", "Construction", "Finance"];

  const filteredAgents = selectedCategory === "All" 
    ? mockAgents 
    : mockAgents.filter(agent => 
        agent.expertise.some(exp => exp.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in space-y-6">
            <h1 className="text-5xl font-light">Explore Procurement Agents</h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Discover and connect with AI-powered company agents across industries
            </p>
          </div>

          {/* Search */}
          <div className="mb-12 animate-slide-up">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth font-light"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
            {filteredAgents.map((agent, index) => (
              <ExpertCard key={index} {...agent} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
