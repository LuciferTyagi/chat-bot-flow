import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/ui/Header";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BOT_FLOW_FEATURES } from "../../utils/constant/features";
import FAQSection from "../../components/introduction/FAQSection";

const Introduction = ({setSelectedView}) => {
  return (
    <Stack gap={1}>
      <Header
        heading={"Introduction"}
        btnControls={false}
        secondaryControl={true}
      />
      <Stack paddingX={2} >
        <Typography variant="h4" fontWeight={600} color="#333">Bot Flow </Typography>
        <Typography variant="body1" color="#555">
          Design dynamic chatbot conversations with an intuitive drag-and-drop
          interface. Build, test, and deploy flows effortlessly.
        </Typography>

        
        <Stack direction={"row"} gap={1} mt={2}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#fe328e", borderRadius: 4 }}
            endIcon={<ArrowRightAltIcon />}
            onClick={() => setSelectedView("Workflow")}
          >
            Get Started
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#fe328e", borderRadius: 4 }}
            endIcon={<LinkedInIcon />}
            onClick={() =>
              window.open("https://www.linkedin.com/in/lucifertyagi/", "_blank")
            }
          >
            Linkedin
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", bgcolor: "#fe328e", borderRadius: 4 }}
            endIcon={<GitHubIcon />}
             onClick={() =>
              window.open("https://github.com/LuciferTyagi?tab=repositories", "_blank")
            }
          >
            Github
          </Button>
        </Stack>

        <Stack mt={3} gap={1}>
          <Typography variant="h4" color="#333" fontWeight={600}>Why Bot Flow?</Typography>
          <Stack gap={1}>
            {BOT_FLOW_FEATURES.map((feature, index) => (
              <Typography key={index} variant="body1" color="#555">
                • {feature}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <FAQSection/>
      </Stack>
    </Stack>
  );
};

export default Introduction;
