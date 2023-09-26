import SakaraIcon from "../assets/SakaraIcon.svg";

const Title = (props) => {
  return (
    <h2 className="title">
      <img src={SakaraIcon} alt="sk" id="skr-1" />
      {props.text}
      <img src={SakaraIcon} alt="sk" id="skr-2" />
    </h2>
  );
};
export default Title;
