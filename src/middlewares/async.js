export default ({ dispatch }) =>
  (next) =>
  (action) => {
    //check to see if an action has a promise on payload property

    //if it doesn't send it to next middleware
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    //wait for promise to resolve then create new action with resolved data and then dispatch it
    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      //dispatch sends it through all middlewres again
      dispatch(newAction);
    });
  };
