const Review = (props) => {
  return (
    <div className="custom-slide">
      <img src={props.src} />
      <p className="text-overlay">{props.text}</p>
    </div>
  );
};
export default Review;
