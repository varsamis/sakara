import { texts } from "../data";
import SakaraIcon from "../assets/SakaraIcon.svg";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="section footer" id="footer">
      <div className="social-icons">
        <img src={SakaraIcon} alt="sk" id="skr-3" />
        <a href={"mailto:" + texts.common.email}>
          <HiOutlineMail />
        </a>
        <a href={"tel:" + texts.common.telephone}>
          <HiOutlinePhone />
        </a>
        <img src={SakaraIcon} alt="sk" id="skr-3" />
      </div>
      <br />
      <p className="disclaimer">© 2023 created by varsamisk</p>
    </section>
  );
};
export default Footer;
