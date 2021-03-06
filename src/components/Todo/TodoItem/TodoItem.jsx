import React from 'react';
import classNames from 'classnames';

import withTodoItem from './withTodoItem';

import styles from './TodoItem.module.css';

const TodoItem = ({ title, id, updateStatus, completed, keyword }) => {
  const makeBold = (item, keyword) => {
    const re = new RegExp(`^(${keyword})`);
    return item.replace(re, '<b>' + keyword + '</b>');
  };

  return (
    <div
      className={classNames(styles.TodoItem, {
        [styles.Done]: completed,
      })}
    >
      <p dangerouslySetInnerHTML={{ __html: makeBold(title, keyword) }}></p>
      <div className={styles.Controls}>
        <button
          onClick={() => updateStatus(id)}
          className={completed ? styles.DoneBtn : null}
        ></button>
      </div>
    </div>
  );
};

export default withTodoItem(TodoItem);
