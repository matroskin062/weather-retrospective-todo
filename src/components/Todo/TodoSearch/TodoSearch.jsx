import React from 'react';

import styles from './TodoSearch.module.css';

const TodoSearch = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className={styles.Search}>
      <input
        placeholder={'Search text in todos'}
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default TodoSearch;
