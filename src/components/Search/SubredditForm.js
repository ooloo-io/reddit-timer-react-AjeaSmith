import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import * as S from './SubredditForm.style';

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
        <S.FormLabel>
          r/
          <S.FormInput
            value={subreddit}
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
