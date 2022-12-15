import styled from "styled-components";
import media from "../../helpers/styles/mediaQueries";
import { IMoneyProps, MoneyWrapper } from "../Money/Money";

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
    max-width: 25rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: var(--round-md);
    & > * + * {
      margin-top: 2rem;
    }
    ${media.up("sm")`
      padding:1.5rem;
    `}
  }
`;

export const CartRemoveAllButton = styled.button`
  font-family: Manrope, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: medium;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.text.darkAlt};
  &:disabled {
    display: none;
  }
`;

export const CartMoneyLabel = styled.span`
  font-family: Manrope, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: medium;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.darkAlt};
`;
