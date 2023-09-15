import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const Home = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="home" className="contianer">
      <section className="section home parallax" id="home">
        <div className="homeText">
          <div className="homeName">
            Sabrina <br />
            Karavarsami
          </div>
          <div className="homeDescr">{texts[selectedLanguage].home.descr}</div>
        </div>
      </section>
    </Element>
  );
};
export default Home;
