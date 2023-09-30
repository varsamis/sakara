import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import Title from "./Title";

const Contact = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="contact" className="container">
      <Title text={texts[selectedLanguage].h_contact} />
      <section className="section contact" id="contact">
        <div className="map">
          {/* <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameBorder="0"></iframe> */}
        </div>
        <address className="address">
          <p className="contact-name">Sabrina Karavarsami</p>
          <p>{texts.common.address_l1}</p>
          <p>{texts.common.address_l2}</p>

          <p>
            <a href={"tel:" + texts.common.telephone}>{texts.common.telephone}</a>
          </p>
          <p>
            <a href={"mailto:" + texts.common.email}>{texts.common.email}</a>
          </p>
          <br />
        </address>
      </section>
    </Element>
  );
};
export default Contact;
