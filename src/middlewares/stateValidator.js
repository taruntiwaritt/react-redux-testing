import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //we want action to go through other middlewares first
    next(action);
    if (!tv4.validate(getState(), stateSchema)) {
      console.log("invalid states");
      console.warn("Invalid state schema expected");
    }
  };
