import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import Title from "./Title";

const Qualification = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="qualification" className="container parallax qualification-background">
      <div className="qualification-card">
        <Title text={texts[selectedLanguage].h_qualification} />
        <section className="section qualification" id="qualification">
          <ul>
            <li className="qualification-strong">{texts[selectedLanguage].kranio_qualification.description}</li>
            <ul>
              {texts[selectedLanguage].kranio_qualification.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>

            <li className="qualification-strong">{texts[selectedLanguage].hypnosystemic_qualification.description}</li>
            <ul>
              {texts[selectedLanguage].hypnosystemic_qualification.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong>
                </li>
              ))}
            </ul>

            {texts[selectedLanguage].other_qualification.items.map((item, i) => (
              <li className="qualification-strong" key={item.title}>
                {item.title}
              </li>
            ))}
          </ul>
          <p className="qualification-footer">{texts[selectedLanguage].footer_qualification}</p>
        </section>
      </div>
    </Element>
  );
};
export default Qualification;
