import styled from "styled-components";
import { Flex, Typography } from "../../components";
import { IncludesType } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";

interface IInTheBoxProps {
  includes: IncludesType;
}

const InTheBoxSection = styled.section`
  ${media.up("sm")`
    grid-column:span 6;
    .heading{
      grid-column:span 3;
    }
    ul{
      grid-column:span 3;
    }
  `}
  ${media.up("md")`
    grid-column:9 / span 4;
    .heading{
      grid-column:span 6;
    }
    ul{
      grid-column:span 6;
    }
  `}
`;

const InTheBox: React.FunctionComponent<IInTheBoxProps> = ({ includes }) => {
  return (
    <InTheBoxSection>
      <Flex
        xs={{ direction: "column", gap: 2 }}
        sm={{ direction: "row", gap: 7 }}
        md={{ direction: "column", gap: 2 }}
      >
        <Typography component="h3" variant="h5" className="heading">
          In the box
        </Typography>
        <ul>
          <Flex xs={{ direction: "column", gap: 1 }}>
            {includes.map(({ quantity, item }, index) => (
              <li key={index}>
                <Flex xs={{ gap: 1 }}>
                  <Typography textColor="accent">{quantity}x</Typography>
                  <Typography textColor="darkAlt">{item}</Typography>
                </Flex>
              </li>
            ))}
          </Flex>
        </ul>
      </Flex>
    </InTheBoxSection>
  );
};

export default InTheBox;
