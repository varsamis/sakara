import sakaraIcon from "../assets/Sakara.svg";

const Title = (props) => {
  return (
    <h2 className="title">
      <img src={sakaraIcon} alt="sk" id="skr" />
      {props.text}
      <img src={sakaraIcon} alt="sk" id="skl" />
    </h2>
  );
};
export default Title;
