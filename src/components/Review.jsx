const Review = (props) => {
  return (
    <div className="custom-slide">
      <img src={props.src} />
      <p className="text-overlay review-text">
        {props.text} <br /> <br />
        {props.name}
      </p>
    </div>
  );
};
export default Review;
