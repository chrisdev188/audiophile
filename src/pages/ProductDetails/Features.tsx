import styled from "styled-components";
import { Container, Flex, Typography } from "../../components";
import { ProductFeaturesType } from "../../context/ProductListContext";
import media from "../../helpers/styles/mediaQueries";

interface IFeaturesProps {
  features: ProductFeaturesType;
}

const FeaturesSection = styled.section`
  grid-column: span 1;
  ${media.up("sm")`
    grid-column: span 6;
  `}
  ${media.up("md")`
    grid-column: span 7;
  `}
`;

const Features: React.FunctionComponent<IFeaturesProps> = ({ features }) => {
  const paragraphs = features.split("\n\n");
  return (
    <FeaturesSection>
      <Flex xs={{ gap: 2, direction: "column" }}>
        <Typography component="h3" variant="h5">
          Features
        </Typography>
        {paragraphs.map((p, index) => (
          <Typography key={index} textColor="darkAlt">
            {p}
          </Typography>
        ))}
      </Flex>
    </FeaturesSection>
  );
};

export default Features;
