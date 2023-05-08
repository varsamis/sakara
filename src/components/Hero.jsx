import { Element } from "react-scroll";

import heroImg from "../assets/IMG_3327.png";

const Hero = () => {
  return (
    <Element name="hero">
      <section className="section hero parallax" id="hero">
        <h3>Home</h3>
        {/* <img src={heroImg} alt="" /> */}
      </section>
    </Element>
  );
};
export default Hero;
