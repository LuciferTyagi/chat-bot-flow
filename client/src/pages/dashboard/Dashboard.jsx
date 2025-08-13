import React, { useCallback, useRef, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Box, Stack } from "@mui/material";
import FlowCanvas from "../../components/flowCanvas/FlowCanvas";
import { ToastContainer } from "react-toastify";
import Introduction from "../Introduction/Introduction";
import { useFlowBuilder } from "../../hooks/useFLowBuilder";
const Dashboard = () => {
  const [selectedView, setSelectedView] = useState("Introduction");
  const flowProps = useFlowBuilder();
  const viewComponents = {
    Workflow: (
      <FlowCanvas
        {...flowProps}
        onSave={flowProps.handleSave}
        onRestore={flowProps.handleRestore}
      />
    ),
    Introduction: <Introduction setSelectedView={setSelectedView} />,
  };
  return (
    <>
      <ToastContainer />
      <Stack
        width={"100%"}
        height={"100vh"}
        bgcolor={""}
        direction={"row"}
        justifyContent={"end"}
      >
        <Sidebar
          selectedNode={flowProps.selectedNode}
          setSelectedNode={flowProps.setSelectedNode}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
        <Stack width={"calc(100% - 300px)"} height={"100vh"} bgcolor={""}>
          {viewComponents[selectedView]}
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
