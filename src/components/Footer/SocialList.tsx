import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import { StyledSocialList } from "./styles";

const socials = [
  {
    id: 1,
    name: "Facebook",
    icon: facebookIcon,
    url: "https://www.facebook.com",
  },
  { id: 2, name: "Twitter", icon: twitterIcon, url: "https://www.twitter.com" },
  {
    id: 3,
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com",
  },
];

interface SocialListProps {}

const SocialList: React.FunctionComponent<SocialListProps> = (props) => {
  return (
    <StyledSocialList>
      {socials.map((s) => (
        <li key={s.id}>
          <a href={s.url} target="_blank">
            <img src={s.icon} alt={s.name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
  );
};

export default SocialList;
