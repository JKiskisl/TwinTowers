import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";

const App: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        px: 2,
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <SearchBar />
        <Header />
        <ChatBox />
      </Box>
    </Container>
  );
};

export default App;
