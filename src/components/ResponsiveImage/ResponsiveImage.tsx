import * as React from "react";

interface ResponsiveImageProps {
  name: string;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

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
