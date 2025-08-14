# Chat Bot Flow

A visual chatbot flow builder built with React. It allows users to create conversational flows using draggable nodes, connections, and a settings panel to edit message content. Easily extensible for future node types and chatbot logic.

## Tech Stack

-React.js  
-React Flow  
-Material UI (MUI)

---

## Getting Started

### Clone the Repository

git clone https://github.com/your-username/chat-bot-flow.git
cd chat-bot-flow/client
npm install

## Features

*  Drag and drop node types (e.g., Message) from the Node Panel
*  Add new nodes dynamically to the canvas with positioning
*  Connect nodes visually to define the conversation path
*  Click any node to open a customizable Settings Panel
*  Edit node-specific properties like message text dynamically
*  Validation on required fields before saving the flow
*  Persistent Save button with error handling for missing fields
*  Restore saved flow to continue editing previously created chatbot
*  Clear selection or use the Back button to close Settings Panel
*  Scalable structure to support additional node types in future

## Adding New Nodes to the Application
This guide explains how to add new nodes to your React flow application. Currently, the application supports Message Node and Quick Reply Node.

1. Create the Node Component
 - Inside the src/nodes directory, create your new node component eg. DelayNode.jsx

2. Register the Node Type
 -Add your new node to src/nodes/index.js:
 ```
 import MessageNode from "./MessageNode";
import QuickReplyNode from "./QuickReplyNode";
import DelayNode from "./DelayNode"; // Import your new node

export const NODE_TYPES = {
  messageNode: MessageNode,
  quickReplyNode: QuickReplyNode,
  delayNode: DelayNode, // Add your node type here
  // Add more nodes as needed
};
 ```

3. Create Node Settings (Optional)
 - If your node requires settings, create a settings component , then add it to src/nodes/settings/index.js
 ```
 // src/nodes/settings/DelayNodeSettings.jsx
import React from 'react';

const DelayNodeSettings = ({ nodeData, onUpdate }) => {
  return (
    <div>
      {/* Settings UI for your node */}
    </div>
  );
};

export default DelayNodeSettings;
```
4. Add to Node Palette
 - Finally, add your node to the palette in src/nodes/nodepalette.js:
 ```
 import ChatIcon from "@mui/icons-material/Chat";
import ForumIcon from "@mui/icons-material/Forum";
import TimerIcon from "@mui/icons-material/Timer"; // Import appropriate icon

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
  {
    type: "delayNode",
    label: "Delay",
    icon: TimerIcon,
    iconStyle: { color: "orange" },
  },
  // Add more node types as needed
];
```

# Author
 Made by Yagyansh Tyagi