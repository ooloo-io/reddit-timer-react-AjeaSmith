import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import * as S from './SubredditForm.style';
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
const SubredditForm = () => {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const [posts, setPosts] = useState([]);

  const history = useHistory();
  const onInputChange = (event) => {
    setSubreddit(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${subreddit}`);
  };
  useEffect(() => {
    setSubreddit(initialSubreddit);
    async function fetchResults() {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`,
      );
      setPosts(response.data);
    }
    fetchResults();
  }, [initialSubreddit, subreddit]);
  console.log(posts);
  return (
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
  );
};

export default SubredditForm;
