import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="contact" className="container">
      <h2 className="title">{texts[selectedLanguage].h_contact}</h2>
      <section className="section contact" id="contact">
        <div className="map">
          <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameBorder="0"></iframe>
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
