import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";
import Title from "./Title";

const Kranio = () => {
  const { selectedLanguage, moreCranio, setMoreCranio } = useGlobalContext();

  const handleMoreCranioChange = () => {
    let state = moreCranio;
    setMoreCranio(!state);
  };

  return (
    <Element name="kranio" id="kranio" className="container ">
      <Title text={texts[selectedLanguage].h_kranio} />
      <section className="section kranio">
        <div className="kranio-card">
          <div className={moreCranio ? "textVisible" : "text"}>
            {texts[selectedLanguage].p_kranio.map((p, i) => (
              <article key={i}>
                <p key={i}>{p}</p>
              </article>
            ))}
            <a className="kranio-more-a" href="https://www.kranio.eu/kraniosakralni-terapie/" target="_blank">
              {texts[selectedLanguage].a_kranio_text}
            </a>
            <div className="kranio-ul">
              {texts[selectedLanguage].ul_kranio.map((list, i) => (
                <div key={i}>
                  <h4 key={i}>{list.title}</h4>
                  <ul>
                    {list.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {moreCranio ? (
            <button className="more-button" onClick={handleMoreCranioChange}>
              <HiChevronDoubleUp />
            </button>
          ) : (
            <>
              <div className="fade-overlay"></div>
              <button className="more-button" onClick={handleMoreCranioChange}>
                <HiChevronDoubleDown />
              </button>
            </>
          )}
        </div>
      </section>
    </Element>
  );
};
export default Kranio;
