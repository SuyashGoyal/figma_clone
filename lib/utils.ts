export const getShapeInfo = (shapeType: string) => {
    switch (shapeType) {
        case "i-text":
      return {
        icon: "/assets/text.svg",
        name: "Text",
      };

      case "freeform":
      return {
        icon: "/assets/freeform.svg",
        name: "Free Drawing",
      };
    }
};