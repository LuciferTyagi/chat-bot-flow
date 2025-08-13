import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MarkerType,
  MiniMap,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { Stack } from "@mui/material";
import { useCallback, useEffect } from "react";
import Header from "../ui/Header";
import { NODE_TYPES } from "../../nodes";
import { createNode } from "../../utils/constant/nodeFactory";
import CustomEdge from "../../edges/CustomEdge";
import { toast } from "react-toastify";

const edgeTypes = {
  customEdge: CustomEdge,
};
const FlowCanvas = ({
  selectedNode,
  setSelectedNode,
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  setRfInstance,
  onSave,
  onRestore,
}) => {
  const { screenToFlowPosition } = useReactFlow();
  useEffect(() => {
    if (selectedNode) {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id
            ? { ...node, data: selectedNode.data }
            : node
        )
      );
    }
  }, [selectedNode, setNodes]);
  const onConnect = useCallback(
    (connection) => {
      const { source, sourceHandle } = connection;
      const hasExistingSourceEdge = edges.some(
        (e) => e.source === source && e.sourceHandle === sourceHandle
      );

      if (hasExistingSourceEdge) {
        toast.warn("Only one connection allowed from this source handle.");
        return;
      }

      const edge = {
        ...connection,
        animated: true,
        id: `edge-${Date.now()}`, // safer unique id
        type: "customEdge",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      };

      setEdges((prev) => addEdge(edge, prev));
    },
    [edges, setEdges]
  );

  // Allow dropping by preventing default
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  // Handle drop: read type, calculate position, add node
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = createNode(type, position);
      setNodes((prev) => [...prev, newNode]);
    },
    [screenToFlowPosition, setNodes]
  );
  return (
    <Stack height={"100vh"} width={"calc(100%  -300px)"} bgcolor={""} sx={{}}>
      <Header
        heading={"Hey , Welcome back"}
        onSave={onSave}
        onRestore={onRestore}
        btnControls={true}
        secondaryControl={false}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={NODE_TYPES}
        edgeTypes={edgeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={(e, node) => setSelectedNode(node)}
        onInit={setRfInstance}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Stack>
  );
};

export default FlowCanvas;
