import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";

export const StyledCartModal = styled.div`
  position: relative;
  z-index: 999;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .content-container {
    position: absolute;
    width: 100%;
    padding-top: 7.5rem;
  }
  .content {
    width: 100%;
    max-width: 22rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    & > * + * {
      margin-top: 2rem;
    }
    .btn-full {
      width: 100%;
      justify-content: center;
    }
    ${media.up("sm")`
      padding:1.5rem;
    `}
  }
  .thumbnail {
    width: 4rem;
    height: 4rem;
    border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
`;
