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
            <li>{texts[selectedLanguage].core_qualification.description}</li>
            <ul>
              {texts[selectedLanguage].core_qualification.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
            {/* <h4>{texts[selectedLanguage].other_qualification.description}</h4> */}

            {texts[selectedLanguage].other_qualification.items.map((item, i) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </section>
      </div>
    </Element>
  );
};
export default Qualification;
