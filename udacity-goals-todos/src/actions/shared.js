import API from 'goals-todos-api'

export const RECIEVE_DATA = "RECIEVE_DATA";

function receieveData(todos, goals) {
  return {
    type: RECIEVE_DATA,
    todos,
    goals,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receieveData(todos, goals));
      }
    );
  };
}
