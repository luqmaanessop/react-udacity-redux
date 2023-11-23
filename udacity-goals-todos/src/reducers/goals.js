import { RECIEVE_DATA } from '../actions/shared';
import { ADD_GOAL, REMOVE_GOAL} from '../actions/goals';

export function goals(goalState = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return goalState.concat([action.goal]);
    case REMOVE_GOAL:
      return goalState.filter((goal) => goal.id !== action.id);
    case RECIEVE_DATA:
      return action.goals;
    default:
      return goalState;
  }
}
