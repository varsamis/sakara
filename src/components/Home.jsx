import { Element } from "react-scroll";

import homeImg from "../assets/IMG_4328.png";

const Home = () => {
  return (
    <Element name="home">
      <section className="section home parallax" id="home">
        {/* <img src={homeImg} alt="" /> */}
        <div className="homeText">
          <div className="homeName">
            Sabrina <br />
            Karavarsami
          </div>
          {/* <div className="homeDescr">Super cool awsome person</div> */}
        </div>
      </section>
    </Element>
  );
};
export default Home;
