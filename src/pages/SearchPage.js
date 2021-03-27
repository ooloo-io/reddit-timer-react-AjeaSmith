import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import SubredditForm from '../components/Search/SubredditForm';
import useFetchPosts from '../hooks/useFetchPosts';
import * as S from '../components/Search/SubredditForm.style';

/* eslint-disable react/prop-types */
const SearchPage = () => {
  const { subreddit } = useParams();
  console.log(subreddit);
  const { isLoading, hasError, posts } = useFetchPosts(subreddit);
  console.log(posts);
  return (
    <S.Wrapper>
      <h2>Find the best time for a subreddit</h2>
      <SubredditForm />

      {isLoading ? (
        <Loader type="TailSpin" color="#fdb755" height={70} width={70} />
      ) : (
        <div>{posts.length}</div>
      )}
      {hasError ? <p>{hasError}</p> : null}
    </S.Wrapper>
  );
};
export default SearchPage;
