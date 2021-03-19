import React from 'react';
import { Link } from 'react-router-dom';
import heatmapPNG from '../../images/heatmap.png';
import * as S from './Hero.style';

const Hero = () => (
  <S.Wrapper>
    <div className="hero-content">
      <h2>No reactions to your reddit posts?</h2>
      <small>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </small>
      <button type="button">
        <Link to="/search/javascript">SHOW ME THE BEST TIME</Link>
      </button>
      <small>r/javascript</small>
    </div>
    <div className="hero-image">
      <Link to="/search/javascript">
        <img src={heatmapPNG} alt="heatmap" srcSet="" />
      </Link>
    </div>
    <div className="hero-info">
      <div className="how-it-works" id="#how-it-works">
        <h3>How it works</h3>
        <ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </li>
          {' '}
          <li>See immediately when to submit your reddit post.</li>
        </ul>
      </div>
      <div className="about" id="#about">
        <h3>About</h3>
        <p>
          This app was created during a course on profy.dev with the goal to
          implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests
          and code reviews. Click here for more information.
          {' '}
        </p>
      </div>
    </div>
  </S.Wrapper>
);

export default Hero;
