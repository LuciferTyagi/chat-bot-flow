import { createNode } from "./nodeFactory";

export const initialEdges = [];

export const initialNodes = [
  createNode("messageNode", { x: 100, y: 100 }, { text: "New message" }),
];
