import { css } from "styled-components";
import theme from "../../theme";

export type MediaQueries = keyof typeof theme["mediaQueries"];

const media = {
  up: (key: MediaQueries) => {
    return (args: TemplateStringsArray | String) => `
      @media (min-width: ${theme.mediaQueries[key]}) {
        ${args}
      }
    `;
  },
};

export default media;
