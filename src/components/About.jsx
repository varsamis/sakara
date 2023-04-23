import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <section className="section about" id="about">
        <h3>About me</h3>
        <article className="grid-container">
          <img className="grid-item" src={img1} alt="" />
          <p className="grid-item">
            I love my life and the journey I've taken so far,(I love my life and the path I have walked on so far) and
            even though I've been down ( in my life ) more than once ( and have reached the rock bottom ), (I have found
            myself down and at the bottom more than once) every moment has had its meaning and I'm grateful for it. For
            over 20 years, my passion has been exploring different holistic therapeutic approaches and methods that can
            enable us to live in harmony and joy. (if we allow it..) (if we allow ourselves to..){" "}
          </p>
        </article>
        <article className="grid-container">
          <p className="grid-item">
            In my frequent ( many ) travels to remote and beautiful places in the world, I realized that there are no
            coincidences or accidents and what happens to us in our life is always a message from Life (God, the
            Universe, etc. we all perceive "it" differently...) A message that can be worked with ( with which it is
            possible to work) and if we learn how to understand those messages of Life, we will receive (we are given) a
            wonderful tool (how to achieve) to live in harmony, contentment and love. Sometimes these messages are quite
            hard to understand and I have found excellent help precisely in therapies that can help us with the
            "translation".
          </p>
        </article>
        <article className="grid-container">
          <p className="grid-item">
            For many years I lived in beautiful and interesting places in the world, which influenced me with their
            unique energy and helped me to connect with my inner self and with who I am and what I am doing here. I also
            understood what and why is happening in my life and that I create my own reality (myself) and I no longer
            have to be a victim of destiny(fate), programs from childhood, family patterns etc., but a creator who knows
            that we did not come into the world to suffer, but to live in joy, to explore and learn. Music and dance
            have also helped me to connect with my inner world all my life. I play the oriental frame drum and sing, the
            rhythm and amazing sound of the drum is a beautiful and healing gift for which I am very grateful.
          </p>
          <img className="grid-item" src={img1} alt="" />
        </article>
      </section>
    </Element>
  );
};
export default About;
