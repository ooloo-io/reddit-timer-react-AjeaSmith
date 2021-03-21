import React, { useState } from 'react';

/* eslint-disable react/prop-types */
const Search = ({ history }) => {
  console.log(history);
  const [value, setValue] = useState('javascript');
  const onInputChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${value}`);
  };
  return (
    <section>
      <h2>Find the best time for a subreddit</h2>
      <form onSubmit={onSubmit}>
        <div className="form-wrapper">
          <label htmlFor="reddit">
            r/
            <input
              value={value}
              id="reddit"
              name="reddit"
              type="text"
              onChange={onInputChange}
            />
          </label>
          <button type="submit">Search</button>
        </div>
      </form>
    </section>
  );
};

export default Search;
