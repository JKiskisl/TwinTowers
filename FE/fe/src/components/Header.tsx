import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";

const Header: React.FC = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Avatar
      alt="Elena"
      src="https://via.placeholder.com/150"
      sx={{ width: 100, height: 100 }}
    />
    <div>
      <Typography variant="h4">Elena Doe</Typography>
      <Typography variant="h6" color="text.secondary">
        AI Product Designer
      </Typography>
    </div>
  </Stack>
);

export default Header;
