import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    state: state
  };
};

let Counter = ({ dispatch, state }) => {
  console.log("Value of state is ", state);
  return (
    <div>
      <label>Count: </label>
      <input value={state} readOnly /> <br />
      <button
        className="simple-button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Click Me
      </button>
    </div>
  );
};

Counter = connect(mapStateToProps)(Counter);
export default Counter;
