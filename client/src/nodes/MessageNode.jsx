import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Handle, Position, useReactFlow } from "reactflow";
import ClearIcon from "@mui/icons-material/Clear";
const MessageNode = ({ id, data , selected }) => {
  const { setNodes } = useReactFlow();
  return (
    <Box
      bgcolor={""}
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
        bgcolor={"#b3f0e4"}
        sx={{
          padding: 0.5,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
        }}
      >
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <ChatIcon sx={{ fontSize: "8px" }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: "9px",
            }}
          >
            Send Message
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <WhatsAppIcon sx={{ fontSize: "8px" }} />
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setNodes((prevNodes) =>
                prevNodes.filter((node) => node?.id !== id)
              );
            }}
          >
            <ClearIcon sx={{ fontSize: "8px" }} />
          </IconButton>
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          fontSize: "10px",
          padding: 0.5,
        }}
      >
        {data.text}
      </Typography>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </Box>
  );
};

export default MessageNode;
