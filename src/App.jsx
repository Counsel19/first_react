import "./App.css";
import Card from "./Card";
import HooksComponents from "./HooksComponents";

// JSX => Javascript XML

// function Component
// Class Component

// Rule for React Components
// 1. Comonnet must a part of the UI
// 2. Components name should start with an Uppercase like Classes
// 3. You must return ornly one thing (one parent) from a component

function App() {
  return (
    <div className="container">
      <Card />
      <HooksComponents />
    </div>
  );
}

export default App;

// defualt exports
// Named Export
