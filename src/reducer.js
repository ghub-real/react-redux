export default function counterReducer(state = 0, action) {
  console.log("action ", action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      console.log("Default state of ", state);
      return state;
  }
}
