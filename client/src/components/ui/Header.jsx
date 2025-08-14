import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
const Header = ({ heading  ,onSave , onRestore  , btnControls = false , secondaryControl = false}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{
        borderBottom:'1px solid #e0e0e0',
        padding:2
    }}>
      <Typography variant="h5" sx={{
        color:'grey'
      }}>{heading}</Typography>
      {secondaryControl && (
        <IconButton 
         onClick={() =>
              window.open("https://github.com/LuciferTyagi/chat-bot-flow/tree/main/client", "_blank")
            }
        >
          <GitHubIcon sx={{
            fontSize:'21px'
          }}/>
        </IconButton>
      )}
      {btnControls && (
      <Stack direction={"row"} gap={1}>
      <Button variant="contained" sx={{ textTransform: "none" , bgcolor:'#fe328e' , borderRadius:'30px' }} onClick={onSave}>
        {"Save Changes"}
      </Button>
        <Button variant="contained" sx={{ textTransform: "none" , bgcolor:'#fe328e',borderRadius:'30px'}} onClick={onRestore}>
        {"Restore Changes"}
      </Button>
      </Stack>
      )}
    </Stack>
  );
};

export default Header;
