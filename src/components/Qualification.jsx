import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import Title from "./Title";

const Qualification = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="qualification" className="container">
      <Title text={texts[selectedLanguage].h_qualification} />
      <section className="section qualification" id="qualification">
        <ul>
          <li>{texts[selectedLanguage].core_qualification.description}</li>
          <ol>
            {texts[selectedLanguage].core_qualification.items.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong>
                <br />
                {item.text}
              </li>
            ))}
          </ol>
          {/* <h4>{texts[selectedLanguage].other_qualification.description}</h4> */}

          {texts[selectedLanguage].other_qualification.items.map((item, i) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </section>
    </Element>
  );
};
export default Qualification;
