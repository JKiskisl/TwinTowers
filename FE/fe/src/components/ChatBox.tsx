import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <Paper
      elevation={2}
      sx={{ p: 3, borderRadius: 3, width: "100%", boxShadow: 3 }}
    >
      <Stack spacing={2}>
        <List
          sx={{
            maxHeight: 200,
            overflow: "auto",
            bgcolor: "#f5f5f5",
            borderRadius: 1,
          }}
        >
          {messages.map((msg, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={msg} />
            </ListItem>
          ))}
        </List>
        <Box display="flex">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              bgcolor: "#e0e0e0",
              borderRadius: 1,
            }}
          />
          <IconButton color="primary" onClick={handleSend} sx={{ ml: 1 }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ChatBox;
