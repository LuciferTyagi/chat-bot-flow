import { IconButton } from "@mui/material";
import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import ClearIcon from "@mui/icons-material/Clear";
const CustomEdge = (props) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            fontSize: "10px",
            pointerEvents:"all"
          }}
          onClick={() =>
            setEdges((prevEdge) => prevEdge.filter((edge) => edge.id !== id))
          }
        >
          <ClearIcon
            sx={{
              fontSize: "12px",
            }}
          />
        </IconButton>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
