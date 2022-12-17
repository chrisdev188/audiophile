import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { StyledSocialList } from "./SocialList.styles";

interface ISocialListProps extends React.HTMLAttributes<HTMLElement> {}

const socialList = [
  {
    name: "facebook",
    icon: <FacebookIcon />,
    url: "http://www.facebook.com",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    url: "http://www.twitter.com",
  },
  {
    name: "instagram",
    icon: <InstagramIcon />,
    url: "http://www.instagram.com",
  },
];

const SocialList: React.FunctionComponent<ISocialListProps> = (props) => {
  return (
    <StyledSocialList {...props}>
      {socialList.map(({ name, url, icon }) => (
        <li key={name}>
          <a href={url} target="_blank" aria-label={name}>
            {icon}
          </a>
        </li>
      ))}
    </StyledSocialList>
  );
};

export default SocialList;
