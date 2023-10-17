import { texts } from "../data";
import SakaraIcon from "../assets/SakaraIcon.svg";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="section footer" id="footer">
      <div className="social-icons">
        <img src={SakaraIcon} alt="sk" id="skr-3" />
        <a href={texts.common.location} target="_blank">
          <HiOutlineLocationMarker />
        </a>
        <a href={"mailto:" + texts.common.email}>
          <HiOutlineMail />
        </a>
        <a href={"tel:" + texts.common.telephone}>
          <HiOutlinePhone />
        </a>
        <img src={SakaraIcon} alt="sk" id="skr-4" />
      </div>
      <br />
      <p className="disclaimer">© 2023 created by varsamisk</p>
    </section>
  );
};
export default Footer;
