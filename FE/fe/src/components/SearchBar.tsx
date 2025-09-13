import React, { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <Paper sx={{ p: 2, display: "flex", alignItems: "center", width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ bgcolor: "#ffffff", borderRadius: 1 }}
      />
      <IconButton color="primary" onClick={handleSearch} sx={{ ml: 1 }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
