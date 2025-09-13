import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const Summary: React.FC = () => (
  <Paper
    elevation={2}
    sx={{ p: 3, borderRadius: 3, width: "100%", boxShadow: 3 }}
  >
    <Box>
      <Typography>
        Experienced AI product designer focused on creating intuitive and
        impactful user experiences. Passionate about bridging human-centered
        design and cutting-edge AI technology.
      </Typography>
    </Box>
  </Paper>
);

export default Summary;
