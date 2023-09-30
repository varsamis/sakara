import img1 from "../assets/Sabrina_01.png";
import img2 from "../assets/Sabrina_02.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";
import Title from "./Title";

const About = () => {
  const { selectedLanguage, moreAbout, setMoreAbout } = useGlobalContext();

  const handleMoreAboutChange = () => {
    let state = moreAbout;
    setMoreAbout(!state);
  };

  return (
    <Element name="about" id="about" className="container">
      <Title text={texts[selectedLanguage].h_about} />
      <section className="section about">
        <img src={img1} alt="" className="img1" />
        <div className="about-card">
          <div className={moreAbout ? "textVisible" : "text"}>
            {texts[selectedLanguage].p_about.map((p, i) => (
              <article key={i}>
                <p key={i}>{p}</p>
              </article>
            ))}
          </div>

          {moreAbout ? (
            <button className="more-button" onClick={handleMoreAboutChange}>
              <HiChevronDoubleUp />
            </button>
          ) : (
            <>
              <div className="fade-overlay"></div>
              <button className="more-button" onClick={handleMoreAboutChange}>
                <HiChevronDoubleDown />
              </button>
            </>
          )}
        </div>
        <img src={img2} alt="" className="img2" />
      </section>
    </Element>
  );
};
export default About;
