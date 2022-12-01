import { ResponsiveImageProps } from "./types";

const ResponsiveImage: React.FunctionComponent<ResponsiveImageProps> = ({
  name,
  mobileSrc,
  tabletSrc,
  desktopSrc,
}) => {
  return (
    <picture>
      <source srcSet={desktopSrc} media="(min-width:1140px)" />
      <source srcSet={tabletSrc} media="(min-width:768px)" />
      <img src={mobileSrc} alt={name} />
    </picture>
  );
};

export default ResponsiveImage;
