const someReducer = (state = '', action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return action.data;
    default:
      return state;
  }
};

export default someReducer;
