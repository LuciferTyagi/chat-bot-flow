export const validateFlowBeforeSave = (nodes, edges) => {
  if (nodes.length <= 1) return { isValid: true };

  const nodesWithNoIncoming = nodes.filter((node) => {
    const hasIncoming = edges.some((edge) => edge.target === node.id);
    return !hasIncoming;
  });

  if (nodesWithNoIncoming.length > 1) {
    return {
      isValid: false,
      error: "More than one node has no incoming connection.",
    };
  }

  return { isValid: true };
};
