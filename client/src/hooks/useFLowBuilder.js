/**
 * Custom hook to manage the flow state and logic
 * - Save to LocalStorage
 * - Restore from LocalStorage
 * - React Flow setup
 */

import { useCallback, useState } from "react";
import { useEdgesState, useNodesState, useReactFlow } from "reactflow";
import { toast } from "react-toastify";
import { validateFlowBeforeSave } from "../utils/Validation";
import { initialEdges, initialNodes } from "../utils/constant/workflow";
const flowKey = "saved-flow";
export const useFlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const handleSave = useCallback(() => {
    const validation = validateFlowBeforeSave(nodes, edges);
    if (!validation.isValid) {
      toast.error(validation.error);
      return;
    }

    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
      toast.success("Flow saved successfully!");
    }
  }, [rfInstance, nodes, edges]);

  const handleRestore = useCallback(() => {
    const flow = JSON.parse(localStorage.getItem(flowKey));
    if (flow) {
      const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
      setViewport({ x, y, zoom });
    }
  }, [setNodes, setViewport]);

  return {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    selectedNode,
    setSelectedNode,
    rfInstance,
    setRfInstance,
    handleSave,
    handleRestore,
  };
};
