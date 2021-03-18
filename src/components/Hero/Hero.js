import React from 'react';
import { Link } from 'react-router-dom';
import heatmapPNG from '../../images/heatmap.png';

const Hero = () => (
  <section>
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
  </section>
);

export default Hero;
