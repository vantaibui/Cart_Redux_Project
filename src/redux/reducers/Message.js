import { CHANGE_MESSAGE } from "../types/ActionType";
import { MSS_WELCOME } from "../types/Message";

let initialState = MSS_WELCOME;

const Message = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return action.message;
    }
    default:
      return state;
      break;
  }
};

export default Message;
