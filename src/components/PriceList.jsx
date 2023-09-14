import { texts } from "../data";
import { Element } from "react-scroll";
import { useGlobalContext } from "../context";

const PriceList = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="pricelist" className="container">
      <h2 className="title">{texts[selectedLanguage].h_pricelist}</h2>
      <section className="section pricelist" id="pricelist">
        <p className="price">{texts[selectedLanguage].p_pricelist.price}</p>
        <p className="cancelation">{texts[selectedLanguage].p_pricelist.cancelation}</p>
        <p className="other-option">{texts[selectedLanguage].p_pricelist.other_option}</p>
      </section>
    </Element>
  );
};
export default PriceList;
