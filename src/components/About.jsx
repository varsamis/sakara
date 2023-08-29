import img1 from "../assets/98f71da6-24e5-4800-8296-5e332db2c72f.png";
import img2 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const About = () => {
  const { selectedLanguage, moreAbout, setMoreAbout } = useGlobalContext();

  const handleMoreAboutChange = () => {
    let state = moreAbout;
    setMoreAbout(!state);
  };

  return (
    <section className="section about" id="about">
      <img src={img1} alt="" className="img1" />

      <div>
        <p className={moreAbout ? "aboutTextVisible" : "aboutText"}>
          {texts[selectedLanguage].p_about.map((p, i) => (
            <article key={i}>
              <p key={i}>{p}</p>
            </article>
          ))}
        </p>
      </div>

      {moreAbout ? (
        <button className="more-button" onClick={handleMoreAboutChange}>
          <HiChevronUp />
        </button>
      ) : (
        <>
          <div className="fade-overlay"></div>
          <button className="more-button" onClick={handleMoreAboutChange}>
            <HiChevronDown />
          </button>
        </>
      )}
      <img src={img2} alt="" className="img2" />
    </section>
  );
};
export default About;
