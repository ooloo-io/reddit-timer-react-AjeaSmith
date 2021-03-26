import React, { useEffect } from 'react';
import SubredditForm from '../components/Search/SubredditForm';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as S from '../components/Search/SubredditForm.style';

/* eslint-disable react/prop-types */
const SearchPage = () => {
  useEffect(() => {
   
  }, [])
  return (
  <S.Wrapper>
    <h2>Find the best time for a subreddit</h2>
    <SubredditForm />
  </S.Wrapper>
)};
export default SearchPage;
