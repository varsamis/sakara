import { texts } from "../data";
import { Element } from "react-scroll";
import { useGlobalContext } from "../context";
import Title from "./Title";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/IMG_3327.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
          <div className="custom-slide">
            <img src={img1} />
            <p className="text-overlay">Legend 1</p>
          </div>
          <div>
            <img src={img1} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={img1} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
    </Element>
  );
};
export default Reviews;
