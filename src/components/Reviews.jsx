import { texts } from "../data";
import { Element } from "react-scroll";
import { useGlobalContext } from "../context";
import Title from "./Title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Review from "./Review";

const Reviews = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="reviews" id="reviews" className="container">
      <Title text={texts[selectedLanguage].h_reviews} />
      <section className="section reviews">
        <Carousel
          className="reviews-carousel"
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showArrows={true}
        >
          {texts[selectedLanguage].reviews.map((item, i) => (
            <Review key={i} src={item.src} text={item.text} name={item.name} />
          ))}
        </Carousel>
      </section>
    </Element>
  );
};
export default Reviews;
