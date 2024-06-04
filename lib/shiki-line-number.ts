import { ShikiTransformer } from "shiki";

export const transformerLineNumbers = (): ShikiTransformer => {
  return {
    name: "line-number",
    line(line, index) {
      line.properties = {
        ...line.properties,
        class: ["line"],
        "data-line": `${index}`,
      };

      line.children.unshift({
        type: "element",
        tagName: "span",
        properties: {
          class: ["line-number"],
        },
        children: [
          {
            type: "text",
            value: `${index}`,
          },
        ],
      });

      return line;
    },
  };
};
