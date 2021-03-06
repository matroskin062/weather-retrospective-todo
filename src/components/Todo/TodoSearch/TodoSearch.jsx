import React from 'react';

import styles from './TodoSearch.module.css';

const TodoSearch = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.Search}>
      <input placeholder={'Search text in todos'} onChange={handleChange} />
      <button>Search</button>
    </div>
  );
};

export default TodoSearch;
