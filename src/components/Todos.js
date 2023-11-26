import {useRef} from 'react';
import {handleAddTodo, handleDeleteTodo, handleToggle} from '../actions/todos';
import List from './List'
import {connect} from 'react-redux';

const Todos = (props) => {
  const todoInputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();

    props.dispatch(
      handleAddTodo(todoInputRef.current.value, () => {
        todoInputRef.current.value = "";
      })
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggle(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add to do" ref={todoInputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect((state)=> ({
  todos: state.todos
}))(Todos)
