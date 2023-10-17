import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const Home = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="home" className="contianer">
      <section className={window.innerWidth <= 1000 ? "section home" : "section home parallax"} id="home">
        <div className="homeText">
          <div className="homeName">
            Sabrina <br />
            Karavarsami
          </div>
          <div className="homeDescr">{texts[selectedLanguage].home.descr}</div>
        </div>
        <div className="homeQuote">
          <p>{texts[selectedLanguage].home.quote}</p>
          <p>{texts[selectedLanguage].home.quote_name}</p>
        </div>
      </section>
    </Element>
  );
};
export default Home;
