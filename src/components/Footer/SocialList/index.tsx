// import { ReactComponent as FacebookLogo } from "../../../assets/shared/desktop/icon-facebook.svg";
// import { ReactComponent as TwitterLogo } from "../../../assets/shared/desktop/icon-twitter.svg";
// import { ReactComponent as InstagramLogo } from "../../../assets/shared/desktop/icon-instagram.svg";
import { StyledSocialList } from "./styles";

const socials = [
  {
    id: 1,
    name: "Facebook",
    src: "/assets/shared/desktop/icon-facebook.svg",
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    name: "Twitter",
    src: "/assets/shared/desktop/icon-twitter.svg",
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    name: "Instagram",
    src: "/assets/shared/desktop/icon-instagram.svg",
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
            <img src={s.src} alt={s.name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
  );
};

export default SocialList;
