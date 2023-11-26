import {connect} from 'react-redux';
import {useRef} from 'react';
import List from './List';
import {handleAddGoal, handleDeleteGoal} from '../actions/goals';

const Goals = (props) => {
  const goalRef = useRef();

  const addGoal = (e) => {
    e.preventDefault();

    props.dispatch(
      handleAddGoal(goalRef.current.value, () => {
        goalRef.current.value = "";
      })
    );
  };

  const removeGoal = (goal) => {
    props.dispatch(
      handleDeleteGoal(goal.id, () => {
        props.dispatch(addGoal(goal));
      })
    );
  };

  return (
    <div>
      <h1>Goal list</h1>
      <input type="text" placeholder="Add a goal" ref={goalRef} />
      <button onClick={addGoal}>Add goal</button>
      <List items={props.goals} remove={removeGoal} />
    </div>
  );
};

export default connect((state)=> ({
  goals: state.goals
}))(Goals)
