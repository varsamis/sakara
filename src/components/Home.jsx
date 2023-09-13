import { Element } from "react-scroll";

import homeImg from "../assets/IMG_4328.png";

const Home = () => {
  return (
    <Element name="home" className="contianer">
      <section className="section home parallax" id="home">
        <div className="homeText">
          <div className="homeName">
            Sabrina <br />
            Karavarsami
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Home;
