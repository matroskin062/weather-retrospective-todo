import React from 'react';

import styles from './SelectUser.module.css';

const SelectUser = ({ users, selectUser }) => {
  const handleSelect = (e) => {
    if (parseInt(e.target.value)) selectUser(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelect} className={styles.Select}>
        <option>Select user...</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectUser;
