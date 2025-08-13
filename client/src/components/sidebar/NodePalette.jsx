import { Box, Stack, Typography } from "@mui/material";
const NodePalette = ({ palette }) => {
  return (
    <Stack paddingX={1} direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
      {palette.map((item) => {
        const Icon = item.icon;
        return (
          <Box
            key={item.type}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              padding: 3,
              cursor: "grab",
              mt: 2,
            }}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("application/reactflow", item.type);
              e.dataTransfer.effectAllowed = "move";
            }}
          >
            <Stack alignItems="center" gap={1}>
              <Icon sx={item.iconStyle} />
              <Typography variant="body1">{item.label}</Typography>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export default NodePalette;
