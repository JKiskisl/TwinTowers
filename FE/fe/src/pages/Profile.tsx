import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Users, CheckCircle, Send, Sparkles } from "lucide-react";

// Mock profile data
const mockProfile = {
  id: "techcorp-procurement",
  name: "TechCorp Procurement Agent",
  title: "AI Agent for TechCorp Global Sourcing",
  bio: "Trained on Q3 2025 RFPs, vendor lists, and procurement staff insights for accurate buying information. Handles IT services, office supplies, and supply chain inquiries. This AI agent provides instant responses about current procurement interests without intrusive outreach.",
  expertise: ["IT Services", "Supply Chain", "Office Supplies", "Vendor Evaluation", "SaaS Procurement", "Contract Management"],
  imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
  connections: 2500,
  verified: true,
  contentSources: [
    { type: "RFPs", count: 45 },
    { type: "Vendor Lists", count: 120 },
    { type: "Public Tenders", count: 30 },
  ],
};

const Profile = () => {
  const { username } = useParams();
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "ai"; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = question;
    setQuestion("");
    setChatHistory([...chatHistory, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = `Based on TechCorp's procurement data and current buying interests regarding "${userMessage}"...\n\nWe are currently evaluating proposals for similar solutions. Our Q3 budget allocates resources for IT infrastructure and SaaS tools under $50K per vendor. We're interested in solutions that integrate with our existing ERP systems and provide detailed analytics. No direct outreach is needed—this response is generated from our trained AI agent based on anonymized procurement data.`;
      
      setChatHistory(prev => [...prev, { role: "ai", content: aiResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Profile Header */}
        <div className="relative bg-gradient-hero border-b border-border">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
            <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
              <img
                src={mockProfile.imageUrl}
                alt={mockProfile.name}
                className="w-32 h-32 rounded-lg object-cover border border-border shadow-sm"
              />
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-4xl font-light">{mockProfile.name}</h1>
                  {mockProfile.verified && (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  )}
                </div>
                <p className="text-xl text-muted-foreground font-light">{mockProfile.title}</p>
                <p className="text-muted-foreground mb-6 max-w-3xl font-light leading-relaxed">{mockProfile.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {mockProfile.expertise.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm font-light">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{mockProfile.connections}+ connections</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {mockProfile.contentSources.map((source, index) => (
                      <span key={index} className="text-muted-foreground">
                        {source.count} {source.type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Chat Area */}
            <div className="lg:col-span-2 space-y-6 animate-slide-up">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-light">Query {mockProfile.name}</h2>
                  </div>

                  {/* Chat History */}
                  <div className="space-y-4 mb-6 min-h-[300px] max-h-[500px] overflow-y-auto">
                    {chatHistory.length === 0 ? (
                      <div className="text-center py-12 text-muted-foreground space-y-4">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p className="font-light">Ask about current procurement interests, buying plans, or vendor opportunities.</p>
                        <p className="text-sm mt-2 font-light">Trained on {mockProfile.name}'s procurement data—ethical and non-intrusive.</p>
                      </div>
                    ) : (
                      chatHistory.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-4 rounded-lg ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground ml-auto"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          </div>
                        </div>
                      ))
                    )}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="space-y-3">
                    <Textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ask about procurement interests, current buying plans, or vendor opportunities..."
                      className="min-h-[100px] resize-none font-light"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleAsk();
                        }
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground font-light">
                        Press Enter to send, Shift + Enter for new line
                      </p>
                      <Button onClick={handleAsk} disabled={isLoading || !question.trim()} className="font-light">
                        <Send className="w-4 h-4 mr-2" />
                        Query AI
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 animate-scale-in">
              <Card className="shadow-sm border-0">
                <CardContent className="p-8">
                  <h3 className="font-light mb-6">About This Agent</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">
                    This AI agent is trained on {mockProfile.name}'s procurement data, including RFPs, vendor lists, and public tenders. All responses are ethical and non-intrusive.
                  </p>
                  <div className="space-y-3">
                    {mockProfile.contentSources.map((source, index) => (
                      <div key={index} className="flex justify-between text-sm font-light">
                        <span className="text-muted-foreground">{source.type}</span>
                        <span>{source.count} records</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-0">
                <CardContent className="p-8">
                  <h3 className="font-light mb-6">Sample Queries</h3>
                  <div className="space-y-3">
                    {[
                      "What IT services are you currently procuring?",
                      "Are you interested in SaaS supply chain tools?",
                      "What's your budget range for cloud services?",
                    ].map((q, index) => (
                      <button
                        key={index}
                        onClick={() => setQuestion(q)}
                        className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-3 rounded hover:bg-muted transition-smooth font-light"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
