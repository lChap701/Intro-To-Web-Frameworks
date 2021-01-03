import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
);
