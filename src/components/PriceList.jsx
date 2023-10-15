import { texts } from "../data";
import { Element } from "react-scroll";
import { useGlobalContext } from "../context";
import Title from "./Title";
import contact_img from "../assets/contact.png";

const PriceList = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="pricelist" className="container">
      <Title text={texts[selectedLanguage].h_pricelist} />
      <section className="section pricelist" id="pricelist">
        <div className="pricelist-card">
          <p className="price">{texts[selectedLanguage].p_pricelist.price}</p>
          <p className="cancelation">{texts[selectedLanguage].p_pricelist.cancelation}</p>
          <p className="other-option">{texts[selectedLanguage].p_pricelist.other_option}</p>
        </div>
      </section>
    </Element>
  );
};
export default PriceList;
