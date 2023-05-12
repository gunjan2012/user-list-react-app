import { SHOW_CARD, HIDE_CARD } from "../constants";
import { usersList } from "../../data/userList";

const intialState = {
  userData: usersList,
  userId: null,
  singleUser: {},
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_CARD:
      return {
        ...state,
        userId: action.userId,
        singleUser: state.userData.find((obj) => obj.id === action.userId),
      };
    case HIDE_CARD:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
};

export default reducer;
