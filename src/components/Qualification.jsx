import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const Qualification = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="qualification" className="container">
      <h2 className="title">{texts[selectedLanguage].h_qualification}</h2>
      <section className="section qualification" id="qualification">
        <h4>{texts[selectedLanguage].core_qualification.description}</h4>
        <ol>
          {texts[selectedLanguage].core_qualification.items.map((item, i) => (
            <li key={i}>
              <strong>{item.title}</strong>
              <br />
              {item.text}
            </li>
          ))}
        </ol>
        <h4>{texts[selectedLanguage].other_qualification.description}</h4>
        <ul>
          {texts[selectedLanguage].other_qualification.items.map((item, i) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </section>
    </Element>
  );
};
export default Qualification;
