import React from 'react';
import withTodoItem from './withTodoItem';

import styles from './TodoItem.module.css';

const TodoItem = ({ title, id, updateStatus, completed, bold }) => {
  const makeBold = (item, keyword) => {
    const re = new RegExp(`^(${keyword})`);
    return item.replace(re, '<b>' + keyword + '</b>');
  };
  return (
    <div className={styles.TodoItem}>
      <p
        className={completed ? styles.Done : ''}
        dangerouslySetInnerHTML={{ __html: makeBold(title, bold) }}
      ></p>
      <div className={styles.Controls}>
        <button onClick={() => updateStatus(id)}>X</button>
      </div>
    </div>
  );
};

export default withTodoItem(TodoItem);
