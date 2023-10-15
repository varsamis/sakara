import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import Title from "./Title";

const Contact = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="contact" className="container contact-background">
      <div className="contact-card">
        <Title text={texts[selectedLanguage].h_contact} />
        <section className="section contact" id="contact">
          <address className="address">
            <p className="contact-name">Sabrina Karavarsami</p>
            <a href={texts.common.location} target="_blank" className="contact-address">
              <p>{texts.common.address_l1}</p>
              <p>{texts.common.address_l2}</p>
            </a>

            <p>
              <a href={"tel:" + texts.common.telephone}>{texts.common.telephone}</a>
            </p>
            <p>
              <a href={"mailto:" + texts.common.email}>{texts.common.email}</a>
            </p>
            <br />
          </address>
        </section>
      </div>
    </Element>
  );
};
export default Contact;
