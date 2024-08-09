import FeedbackButton from "./FeedbackButton";
import "./Card.css";

const Card = () => {
  const data = [
    {
      color: "rgb(239 68 68)",
      value: 1,
    },
    {
      color: "rgb(132 204 22)",
      value: 2,
    },
    {
      color: "rgb(132 204 22)",
      value: 3,
    },
    {
      color: "rgb(59 130 246)",
      value: 4,
    },
    {
      color: "rgb(139 92 246)",
      value: 5,
    },
  ];
  return (
    <div className="card__wrapper">
      <FeedbackButton value="*" variant={true} />

      <h3>How did we do?</h3>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        consectetur temporibus dolore distinctio eaque dolores.
      </p>

      <div className="feedback__btns">
        {data.map((item, index) => (
          <FeedbackButton key={index} color={item.color} value={item.value} />
        ))}
      </div>

      <button>Submit</button>
    </div>
  );
};

export default Card;
