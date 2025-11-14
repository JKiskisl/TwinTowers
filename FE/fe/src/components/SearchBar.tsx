import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  large?: boolean;
}

const SearchBar = ({ onSearch, large = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  {/* REDESIGN: Jords+Co search - white input, metallic button */}
  return (
    <div className="flex items-center gap-3 w-full bg-card rounded-lg shadow-card p-2 focus-within:shadow-hover transition-smooth border border-border">
      <Search className="w-6 h-6 text-muted-foreground ml-3" />
      <Input
        type="text"
        placeholder={large ? "Ask a procurement agent... e.g., 'What IT services is TechCorp procuring?'" : "Search agents..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className={`flex-1 ${large ? 'h-14 text-lg' : ''} border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground`}
      />
      <Button 
        onClick={handleSearch}
        variant="hero"
        className={`${large ? 'h-14 px-8 text-lg' : ''} gap-2`}
      >
        <Search className={large ? "w-5 h-5" : "w-4 h-4"} />
        Query AI
      </Button>
    </div>
  );
};

export default SearchBar;
