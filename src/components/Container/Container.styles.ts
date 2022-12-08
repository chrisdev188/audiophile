import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { IContainerProps } from "./Container.types";

export const StyledContainer = styled.div<IContainerProps>`
  padding-inline: ${(props) =>
    props.full ? 0 : `max(1.5rem, calc((100vw - 1200px) / 2))`};
  ${(props) =>
    media.up("sm")(
      `padding-inline:${
        props.full ? 0 : `max(2rem, calc((100vw - 1200px) / 2))`
      }`
    )}
  padding-block: ${(props) => (props.fullVertical ? 0 : "16px")};
`;
