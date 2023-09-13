import { Element } from "react-scroll";
import { texts } from "../data";

const Contact = () => {
  return (
    <Element name="contact" className="container">
      <h2 className="title">Contact</h2>
      <section className="section contact" id="contact">
        <div className="map">
          <iframe src="https://en.frame.mapy.cz/s/nuleluvome" width="400" height="280" frameborder="0"></iframe>
        </div>
        <div className="address">
          <p>Ul. {texts.common.address}</p>
          <p>T. {texts.common.telephone}</p>
          <p>E. {texts.common.email}</p>
        </div>
      </section>
    </Element>
  );
};
export default Contact;
