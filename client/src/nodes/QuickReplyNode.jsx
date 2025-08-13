import React from "react";
import { Box, IconButton, Stack, Typography, Button } from "@mui/material";
import { Handle, Position, useReactFlow } from "reactflow";
import ClearIcon from "@mui/icons-material/Clear";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const QuickReplyNode = ({ id, data , selected }) => {
  const { setNodes } = useReactFlow();
  const { text = "Choose an option", options = ["Yes", "No"] } = data;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minWidth={"150px"}
      borderRadius={1}
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        gap: 1,
        overflow: "hidden",
         border: selected ? "1px solid #fe328e" : "none"
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"#d0e6ff"}
        sx={{ padding: 0.5, borderTopLeftRadius: 1, borderTopRightRadius: 1 }}
      >
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <ChatBubbleOutlineIcon sx={{ fontSize: "8px" }} />
          <Typography variant="body2" sx={{ fontSize: "9px" }}>
            Quick Reply
          </Typography>
        </Stack>
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            setNodes((nodes) => nodes.filter((node) => node.id !== id));
          }}
        >
          <ClearIcon sx={{ fontSize: "8px" }} />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ fontSize: "10px", padding:0.5 }}>
        {text}
      </Typography>

      <Stack direction="row" gap={1} px={1} pb={1} flexWrap="wrap">
        {options.map((opt, idx) => (
          <Button
            key={idx}
            size="small"
            variant="outlined"
            sx={{ fontSize: "9px", padding: "0px 4px", minWidth: "auto" ,textTransform:"none" }}
          >
            {opt}
          </Button>
        ))}
      </Stack>

      <Handle type="target" position={Position.Left} style={{ background: "#555" }} />
      <Handle type="source" position={Position.Right} style={{ background: "#555" }} />
    </Box>
  );
};

export default QuickReplyNode;
