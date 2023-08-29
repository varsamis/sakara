import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const Kranio = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <section className="section kranio" id="kranio">
      <h3>{texts[selectedLanguage].h_kranio}</h3>
      {texts[selectedLanguage].p_kranio.map((p, i) => (
        <article key={i}>
          <p key={i}>{p}</p>
        </article>
      ))}
      <div className="cranio-ul">
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
    </section>
  );
};
export default Kranio;
