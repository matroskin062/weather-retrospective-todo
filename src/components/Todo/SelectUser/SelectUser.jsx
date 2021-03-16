import React, { useEffect } from 'react';

import styles from './SelectUser.module.css';

const SelectUser = ({ users, selectUser }) => {
  const handleSelect = (e) => {
    if (parseInt(e.target.value)) selectUser(e.target.value);
  };

  useEffect(() => {
    users.length && selectUser(users[0].id);
  }, [users]);

  return (
    <div>
      <select onChange={handleSelect} className={styles.Select}>
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
