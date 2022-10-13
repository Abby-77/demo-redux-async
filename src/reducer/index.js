const initState = {
  count: 0
};

exports.reducer = (state = initState, action) => {
  switch (action.type) {
    case "add_action":
      return {
        count: state.count + 1
      };
    case "sub_action":
      return {
        count: state.count - 1
      };
    case "odd_action":
      return {
        count: state.count % 2 !== 0 ? state.count + 1 : state.count
      };
    case "async_action":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};
