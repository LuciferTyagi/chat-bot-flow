import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChatIcon from "@mui/icons-material/Chat";
import ExploreIcon from "@mui/icons-material/Explore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SchemaIcon from "@mui/icons-material/Schema";

import {
  Button,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { NODE_PALETTE } from "../../nodes/nodePalette";
import { SETTINGS_COMPONENTS } from "../../nodes/settings";
import NodePalette from "./NodePalette";

const drawerWidth = 300;

export default function Sidebar({
  selectedNode,
  setSelectedNode,
  selectedView,
  setSelectedView,
}) {
  const isSettingsMode = selectedView === "Workflow" && !!selectedNode;

  const handleBack = () => setSelectedNode(null);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {/* <Toolbar /> */}
      <Box sx={{ overflow: "auto" }}>
        {isSettingsMode ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent=""
            sx={{
              paddingY: 1.8,
            }}
          >
            <IconButton onClick={handleBack}>
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: "grey", mx: "auto" }}>
              Settings
            </Typography>
          </Stack>
        ) : (
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ my: 2.3, color: "grey" }}
          >
            Node Panel
          </Typography>
        )}
        <Divider />
        <List>
          {navItems.map((nav) => (
            <ListItem key={nav?.id} disablePadding>
              <ListItemButton
                selected={selectedView === nav.label}
                onClick={() => setSelectedView(nav.label)}
              >
                <ListItemIcon>{nav?.Icon}</ListItemIcon>
                <ListItemText primary={nav?.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {selectedView === "Workflow" &&
          (isSettingsMode ? (
            <Box
              sx={{
                paddingX: 2,
              }}
            >
              {(() => {
                const SettingsComponent =
                  SETTINGS_COMPONENTS[selectedNode.type];
                return SettingsComponent ? (
                  <SettingsComponent
                    selectedNode={selectedNode}
                    setSelectedNode={setSelectedNode}
                  />
                ) : (
                  <Typography variant="body2" color="gray">
                    No settings available for this node.
                  </Typography>
                );
              })()}
            </Box>
          ) : (
            <>
              <NodePalette palette={NODE_PALETTE} />
            </>
          ))}
      </Box>
      {isSettingsMode && (
        <Box
          sx={{
            marginTop: "auto",
            width: "100%",
            p: 1,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#fe328e" }}
            startIcon={<KeyboardBackspaceIcon />}
            onClick={handleBack}
          >
            Node Panel
          </Button>
        </Box>
      )}
    </Drawer>
  );
}

const navItems = [
  {
    id: "1",
    label: "Introduction",
    Icon: <ExploreIcon sx={{ color: "#fe328e" }} />,
  },
  {
    id: "2",
    label: "Workflow",
    Icon: <SchemaIcon sx={{ color: "#fe328e" }} />,
  },
];
