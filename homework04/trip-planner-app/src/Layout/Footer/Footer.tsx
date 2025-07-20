import "./Footer.css";

interface FooterProps {
  name: string;
}
function Footer({ name }: FooterProps) {
  return <div className="Footer">Created by {name}</div>;
}

export default Footer;
