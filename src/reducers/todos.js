import { RECIEVE_DATA } from '../actions/shared';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/todos';

function todos(todoState = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return todoState.concat([action.todo]);
    case REMOVE_TODO:
      return todoState.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return todoState.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case RECIEVE_DATA:
      return action.todos;
    default:
      return todoState;
  }
}

export default todos;
