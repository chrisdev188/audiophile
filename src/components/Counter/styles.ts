import styled from "styled-components";

export const StyledCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.card};
  padding: 1rem;
  display: inline-flex;
  justify-content: space-between;
  gap: 1.5rem;
  .minus,
  .plus,
  .number {
    display: grid;
    place-items: center;
    font-size: 13px;
    width: 1rem;
    height: 1.125rem;
  }
  .minus,
  .plus {
    &:disabled {
      pointer-events: none;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
