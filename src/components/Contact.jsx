import { Element } from "react-scroll";
import { texts } from "../data";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="section contact" id="contact">
        <h3>Contact</h3>
        <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameborder="0"></iframe>
        <label>Ul.</label>
        <p>{texts.common.address}</p>
        <label>T.</label>
        <p>{texts.common.telephone}</p>
        <label>E.</label>
        <p>{texts.common.email}</p>
      </section>
    </Element>
  );
};
export default Contact;
