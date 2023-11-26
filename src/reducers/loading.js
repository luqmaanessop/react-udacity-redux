import { RECIEVE_DATA } from "../actions/shared";

function loading(state = true, action) {
  switch (action.type) {
    case RECIEVE_DATA:
      return false;
    default:
      return state;
  }
}

export default loading;
