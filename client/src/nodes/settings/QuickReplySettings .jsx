import React from "react";
import {
  Box,
  TextField,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const QuickReplySettings = ({ selectedNode, setSelectedNode }) => {
  const handleTitleChange = (e) => {
    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        text: e.target.value,
      },
    };
    setSelectedNode(updatedNode);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...selectedNode.data.options];
    newOptions[index] = value;

    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        options: newOptions,
      },
    };
    setSelectedNode(updatedNode);
  };

  const handleAddOption = () => {
    const newOptions = [...selectedNode.data.options, ""];

    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        options: newOptions,
      },
    };
    setSelectedNode(updatedNode);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...selectedNode.data.options];
    newOptions.splice(index, 1);

    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        options: newOptions,
      },
    };
    setSelectedNode(updatedNode);
  };

  return (
    <Box>
      <Typography variant="subtitle1" mb={1}>
        Quick Reply Settings
      </Typography>
      <TextField
        label="Title"
        size="small"
        fullWidth
        value={selectedNode.data.text}
        onChange={handleTitleChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle2">Options:</Typography>
      <Stack spacing={1}>
        {selectedNode.data.options.map((option, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1}>
            <TextField
            size="small"
              fullWidth
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <IconButton onClick={() => handleRemoveOption(index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Stack>

      <Button
        variant="outlined"
        size="small"
        startIcon={<AddIcon />}
        onClick={handleAddOption}
        sx={{ mt: 2 ,textTransform:'none' }}
      >
        Add Option
      </Button>
    </Box>
  );
};

export default QuickReplySettings;
