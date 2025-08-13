// Ensures at most one orphan target when more than one node exists
// export function validateFlow(nodes, edges) {
//   if (nodes.length <= 1) return null;
//   const orphanCount = nodes.filter(
//     (n) => !edges.some((e) => e.target === n.id)
//   ).length;
//   if (orphanCount > 1) {
//     return 'Cannot save: more than one node has no incoming connection.';
//   }
//   return null;
// }
// utils/validateFlow.js
// export const validateFlow = (nodes, edges) => {
//   if (nodes.length <= 1) return true; // Only one node, nothing to validate

//   const targetConnectedNodeIds = edges.map((edge) => edge.target);
//   const unconnectedNodes = nodes.filter(
//     (node) => !targetConnectedNodeIds.includes(node.id)
//   );

//   if (unconnectedNodes.length > 1) {
//     return {
//       valid: false,
//       error: `${unconnectedNodes.length} nodes are unconnected. Only one node is allowed without target handle.`,
//     };
//   }

//   return { valid: true };
// };
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
