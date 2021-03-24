import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as S from './SubredditForm.style';
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
const Search = () => {
  const history = useHistory();
  const params = useParams();
  console.log(history, params);
  const [value, setValue] = useState('');
  const onInputChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${value}`);
  };
  useEffect(() => {
    // setSubreddit(initialSubreddit);
  }, []);
  return (
    <S.Wrapper>
      <h2>Find the best time for a subreddit</h2>
      <S.Form onSubmit={onSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <S.FormLabel htmlFor="reddit">
          r/
          <S.FormInput
            value={value}
            id="reddit"
            name="reddit"
            type="text"
            onChange={onInputChange}
          />
        </S.FormLabel>
        <S.FormButton type="submit">Search</S.FormButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default Search;
