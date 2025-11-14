import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Building2 } from "lucide-react";

interface ExpertCardProps {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
  connections: number;
}

const ExpertCard = ({ id, name, title, bio, expertise, imageUrl, connections }: ExpertCardProps) => {
  {/* REDESIGN: Jords+Co agent cards - white bg, shadow, bold text */}
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group border border-border bg-card">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 rounded-lg object-cover border-2 border-border"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 text-primary group-hover:scale-105 transition-transform">{name}</h3>
            <p className="text-sm text-foreground">{title}</p>
          </div>
        </div>
        
        <p className="text-sm text-foreground mb-6 line-clamp-3 leading-relaxed">{bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {expertise.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-semibold border border-border">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
          <Building2 className="w-5 h-5" />
          <span>{connections}+ connections</span>
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-0 flex gap-3">
        <Button variant="outline" className="flex-1" asChild>
          <Link to={`/profile/${id}`}>
            View Agent
          </Link>
        </Button>
        <Button variant="hero" className="flex-1 gap-2" asChild>
          <Link to={`/profile/${id}#chat`}>
            <MessageSquare className="w-5 h-5" />
            Ask AI
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExpertCard;
