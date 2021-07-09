export default function ({ dispatch }) {
  return function (next) {
    return function (action) {
      //do something with the action. This is the same action what actionCreator returns
    };
  };
}
