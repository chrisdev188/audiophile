interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        padding: "10rem",
        color: "white",
        textAlign: "center",
      }}
    >
      This is footer
    </footer>
  );
};

export default Footer;
