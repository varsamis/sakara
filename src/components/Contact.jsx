import { Element } from "react-scroll";
import { texts } from "../data";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="section contact" id="contact">
        <h3>Contact</h3>
        <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameborder="0"></iframe>
        <p>Ul. {texts.common.address}</p>
        <p>T. {texts.common.telephone}</p>

        <p>E. {texts.common.email}</p>
      </section>
    </Element>
  );
};
export default Contact;
