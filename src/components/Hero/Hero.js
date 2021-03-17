import React from 'react';
import heatmapPNG from '../../images/heatmap.png';

const Hero = () => (
  <section>
    <div className="hero-content">
      <h2>No reactions to your reddit posts?</h2>
      <small>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </small>
      <button type="button">SHOW ME THE BEST TIME</button>
      <small>r/javascript</small>
    </div>
    <div className="hero-image">
      <img src={heatmapPNG} alt="heatmap" srcSet="" />
    </div>
  </section>
);

export default Hero;
