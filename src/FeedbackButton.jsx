/* eslint-disable react/prop-types */
import "./FeedbackButton.css";

// Props
// Are objects that are passed down to every react component
// Are passed down as parameters
// if you pass anything to that compnent reatc will pass an empty object

const FeedbackButton = ({ variant, value, color }) => {
  return (
    <button
      style={{ background: color }}
      className={`feedback_btn ${variant ? "variant" : ""} `}
    >
      {value}
    </button>
  );
};

export default FeedbackButton;
