import React from "react";
import { TextField, Typography } from "@mui/material";

const MessageSettings = ({ selectedNode, setSelectedNode }) => {
  const handleChange = (e) => {
    setSelectedNode({
      ...selectedNode,
      data: { ...selectedNode.data, text: e.target.value },
    });
  };

  return (
    <>
      <Typography variant="subtitle1" mb={1}>
        Quick Reply Settings
      </Typography>

      <TextField
        label="Message Text"
        size="small"
        fullWidth
        margin="normal"
        value={selectedNode.data.text}
        onChange={handleChange}
      />
    </>
  );
};

export default MessageSettings;
