import { useState } from "react";
import DateInputForm from "./DateInputForm";
import Result from "./Result";
import Icon from "./Icon";
import "./App.css";

const App = () => {
  const [formState, setFormState] = useState({});

  return (
    <div className="container">
      <DateInputForm formState={formState} setFormState={setFormState} />
      <div className="icon-container">
        <hr></hr>
        <Icon />
      </div>
      <Result formState={formState} setFormState={setFormState} />
    </div>
  );
};

export default App;
