const Review = (props) => {
  return (
    <div className="custom-slide">
      <img src={props.src} />
      <p className="text-overlay">
        {props.text} <br /> <br />
        {props.name}
      </p>
    </div>
  );
};
export default Review;
