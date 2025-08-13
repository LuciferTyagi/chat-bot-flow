export const createNode = (type, position, customData = {}) => {
  return {
    id: `node_${+new Date()}`,
    type,
    position,
    data: {
      ...getDefaultData(type),
      ...customData,
    },
  };
};

const getDefaultData = (type) => {
  switch (type) {
    case "messageNode":
      return { text: "New message" };
    case "delayNode":
      return { seconds: 5 };
    case "quickReplyNode":
      return { text: "Do you want to continue?", options: ["Yes", "No"] };
    default:
      return {};
  }
};
