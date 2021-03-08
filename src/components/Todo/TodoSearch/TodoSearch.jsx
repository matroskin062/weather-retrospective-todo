import React from 'react';

import styles from './TodoSearch.module.css';

const TodoSearch = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
    onSearch(e.currentTarget.value);
  };

  return (
    <div className={styles.Search}>
      <label>
        Search:{' '}
        <input
          placeholder={'Search text in todos'}
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default TodoSearch;
