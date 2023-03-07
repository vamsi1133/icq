import { Box, Input, TextField } from "@mui/material";
import React from "react";

function QuestionMenu(props) {
  return (
    <Box sx={{ position: "fixed" }}>
      <h4>Menu</h4>
      <Input
        onChange={(e) => props.search(e.target.value)}
        placeholder="search"
      />
    </Box>
  );
}

export default QuestionMenu;
