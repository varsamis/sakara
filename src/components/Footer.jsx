import { texts } from "../data";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="section footer" id="footer">
      <div className="social-icons">
        <a href={"mailto:" + texts.common.email}>
          <HiOutlineMail />
        </a>
        <a href={"tel:" + texts.common.telephone}>
          <HiOutlinePhone />
        </a>
      </div>

      <br />
      <p className="disclaimer">© 2023 created by varsamisk</p>
    </section>
  );
};
export default Footer;
