import API from 'goals-todos-api'

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

export const handleAddGoal = (name, callback) => {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));
        callback();
      })
      .catch(() => {
        alert("Error creating a goal. Please try again");
      });
  };
};

export const handleDeleteGoal = (id, callback) => {
  return (dispatch) => {
    dispatch(removeGoal(id));
    return API.deleteGoal(id).catch(() => {
      alert("there was an error deleting this goal! try again");
    });
  };
};
