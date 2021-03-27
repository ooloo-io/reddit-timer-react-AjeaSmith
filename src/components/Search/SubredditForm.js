import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import * as S from './SubredditForm.style';
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
const SubredditForm = () => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);

  const onInputChange = (event) => {
    setSubreddit(event.target.value);
  };
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${subreddit}`);
  };
  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);
  return (
    <>
      <S.Form onSubmit={onSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <S.FormLabel htmlFor="reddit">
          r/
          <S.FormInput
            value={subreddit}
            id="reddit"
            name="reddit"
            type="text"
            onChange={onInputChange}
          />
        </S.FormLabel>
        <S.FormButton type="submit">Search</S.FormButton>
      </S.Form>
    </>
  );
};
export default SubredditForm;
