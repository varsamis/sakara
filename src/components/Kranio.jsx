import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import { HiChevronDoubleUp, HiChevronDoubleDown } from "react-icons/hi";

const Kranio = () => {
  const { selectedLanguage, moreCranio, setMoreCranio } = useGlobalContext();

  const handleMoreCranioChange = () => {
    let state = moreCranio;
    setMoreCranio(!state);
  };

  return (
    <Element name="kranio" id="kranio" className="container parallax kranio-background">
      <div className="kranio-card">
        <h2 className="title">{texts[selectedLanguage].h_kranio}</h2>
        <section className="section kranio">
          <div className={moreCranio ? "textVisible" : "text"}>
            {texts[selectedLanguage].p_kranio.map((p, i) => (
              <article key={i}>
                <p key={i}>{p}</p>
              </article>
            ))}
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
        </section>
      </div>
    </Element>
  );
};
export default Kranio;
