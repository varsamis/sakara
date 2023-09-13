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
        {texts[selectedLanguage].other_qualification.map((item, i) => (
          <h4>{item.title}</h4>
        ))}
      </section>
    </Element>
  );
};
export default Qualification;
