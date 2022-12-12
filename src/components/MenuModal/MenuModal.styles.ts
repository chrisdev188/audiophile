import styled from "styled-components";

export const StyledMenuModal = styled.div`
  z-index: 998;
  position: relative;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .content {
    position: absolute;
    top: 5.5rem;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding-block: 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
