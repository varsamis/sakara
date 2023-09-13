import img1 from "../assets/98f71da6-24e5-4800-8296-5e332db2c72f.png";
import img2 from "../assets/Sabrina_02.jpg";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";

const About = () => {
  const { selectedLanguage, moreAbout, setMoreAbout } = useGlobalContext();

  const handleMoreAboutChange = () => {
    let state = moreAbout;
    setMoreAbout(!state);
  };

  return (
    <Element name="about" id="about" className="container">
      <h2 className="title">{texts[selectedLanguage].h_about}</h2>
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
