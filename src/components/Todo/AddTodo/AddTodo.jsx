import React from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({ addTodo }) => {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
    if (inputRef.current.value.trim()) {
      addTodo(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className={styles.AddTodo}>
      <input ref={inputRef} placeholder='Type new todo here' />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodo;
