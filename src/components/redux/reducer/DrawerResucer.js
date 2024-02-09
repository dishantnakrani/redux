const initialState = {
  formList: [],
};

export const changeTheNumber = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBY10":
      return state + 10;
    default:
      return state;
  }
};

export const formData = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
        ...state,
        formList: [...state.formList, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        formList: state.formList.filter((x) => x.id !== action.payload),
      };

    case "EDIT":
      return {
        ...state,
        formList: state.formList.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry
        ),
      };

    default:
      return state;
  }
};
