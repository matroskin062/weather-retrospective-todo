import React from 'react';
import classNames from 'classnames';

import withTodoItem from './withTodoItem';

import styles from './TodoItem.module.css';

const TodoItem = ({ title, toggleCompleted, completed, keyword, makeBold }) => {
  return (
    <div
      className={classNames(styles.TodoItem, {
        [styles.Done]: completed,
      })}
    >
      <p dangerouslySetInnerHTML={makeBold(title, keyword)}></p>
      <div className={styles.Controls}>
        <button
          onClick={() => toggleCompleted()}
          className={completed ? styles.DoneBtn : null}
        ></button>
      </div>
    </div>
  );
};

export default withTodoItem(TodoItem);
