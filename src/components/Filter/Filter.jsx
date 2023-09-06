import React from 'react';

const Filter = ({ title, filterChange }) => {
  return (
    <label>
      {title}
      <input type="text" name="filter" onInput={filterChange} />
    </label>
  );
};

export default Filter;
