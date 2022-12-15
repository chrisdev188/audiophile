import styled from "styled-components";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";

export interface IMoneyProps extends React.HTMLAttributes<HTMLElement> {
  number?: number;
  textDarkAlt?: boolean;
  small?: boolean;
}

export const MoneyWrapper = styled.span<IMoneyProps>`
  font-family: Manrope, sans-serif;
  font-weight: bold;
  line-height: 25px;
  font-size: ${(p) => (p.small ? "15px" : "18px")};
  letter-spacing: ${(p) => (p.small ? "0" : "1.29px")};
  color: ${(p) => (p.textDarkAlt ? p.theme.palette.text.darkAlt : "black")};
`;

const Money: React.FC<IMoneyProps> = ({ number = 0, ...others }) => {
  return (
    <MoneyWrapper {...others}>
      {usdCurrencyFormatter.format(number)}
    </MoneyWrapper>
  );
};

export default Money;
