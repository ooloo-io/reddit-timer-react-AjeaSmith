import React from 'react';

const Search = () => (
  <section>
    <h2>Find the best time for a subreddit</h2>
    <form>
      <div className="form-wrapper">
        <label htmlFor="reddit">
          r/
          <input
            id="reddit"
            name="reddit"
            type="text"
            placeholder="javascript"
          />
        </label>
        <button type="submit">Search</button>
      </div>
    </form>
  </section>
);

export default Search;
