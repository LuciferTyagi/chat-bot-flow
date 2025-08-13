import ChatIcon from "@mui/icons-material/Chat";
import ForumIcon from "@mui/icons-material/Forum";

export const NODE_PALETTE = [
  {
    type: "messageNode",
    label: "Message",
    icon: ChatIcon, 
    iconStyle: { color: "purple" }, 
  },
  {
    type: "quickReplyNode",
    label: "Quick Reply",
    icon: ForumIcon,
    iconStyle: { color: "teal" },
  },
  // We can add more node types as needed
];
