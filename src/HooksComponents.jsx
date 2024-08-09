import { useState } from "react";
import "./Card.css";
import { useEffect } from "react";

// 1. useState
// 2. useEffect
// 3. useContext

function HooksComponents() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: ""
   
  });

  //   Empty Dpe list => your useEffect Runs only once
  useEffect(() => {
    document.title = "From useEffect";
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const elName = event.target.name
    const elValue  = event.target.value
    setInputValue({
      ...inputValue,
      [elName]: elValue
    });
  };

  return (
    <div className="card__wrapper">
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>You clicked {count}</p>

      <div style={
        {
          display: "grid",
          gap: "1rem"
        }
      }>
        <input
          value={inputValue.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={inputValue.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter Email"
        />

        {inputValue.length > 1 && <h3>Name is {inputValue}</h3>}
      </div>
    </div>
  );
}

export default HooksComponents;
