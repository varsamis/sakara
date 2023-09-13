import { Element } from "react-scroll";
import { texts } from "../data";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <Element name="contact" className="container">
      <h2 className="title">Contact</h2>
      <section className="section contact" id="contact">
        <div className="map">
          <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameborder="0"></iframe>
        </div>
        <div className="address">
          <>
            <HiOutlineLocationMarker />
            <p> {texts.common.address_l1}</p>
            <p> {texts.common.address_l2}</p>
          </>
          <>
            <HiOutlinePhone />
            <p>{texts.common.telephone}</p>
          </>
          <>
            <HiOutlineMail />
            <p>{texts.common.email}</p>
          </>
        </div>
      </section>
    </Element>
  );
};
export default Contact;
