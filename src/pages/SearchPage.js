import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import SubredditForm from '../components/Search/SubredditForm';
import useFetchPosts from '../hooks/useFetchPosts';
import * as S from '../components/Search/SubredditForm.style';

const SearchPage = () => {
  const { subreddit } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subreddit);
  return (
    <S.Wrapper>
      <h2>Find the best time for a subreddit</h2>
      <SubredditForm />
      {isLoading ? (
        <span data-testid="loading">
          <Loader type="TailSpin" color="#fdb755" height={70} width={70} />
        </span>
      ) : (
        <div>{posts.length}</div>
      )}
      {hasError ? <p>Something went wrong</p> : null}
    </S.Wrapper>
  );
};
export default SearchPage;
