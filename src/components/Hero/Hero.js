import React from "react";
import { Link } from "react-router-dom";
import heatmapPNG from "../../images/heatmap.png";
import * as S from "./Hero.style";

const Hero = () => (
  <S.Wrapper>
    <S.Content>
      <S.Title>No reactions to your reddit posts?</S.Title>
      <S.Subtitle>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </S.Subtitle>
      <Link to="/search/javascript">
        <S.CTALink>Show me the best time</S.CTALink>
      </Link>
      <S.Small>r/javascript</S.Small>
    </S.Content>
    <section>
      <Link to="/search/javascript">
        <S.Image
          src={heatmapPNG}
          alt="heatmap"
          srcSet="/heatmap.png, /heatmap@2x.png 2x, /heatmap@3x.png 3x"
        />
      </Link>
    </section>
    <S.Info>
      <S.InfoContainer>
        <S.InfoTitle id="how-it-works" href="https://ooloo.io/">
          How it works
        </S.InfoTitle>
        <S.InfoContent>
          {" "}
          • We find the 500 top posts from the past year for a subreddit.
          <br /> • The data is visualized in a heatmap grouped by weekday and
          hour of the day.
          <br />• See immediately when to submit your reddit post.
        </S.InfoContent>
      </S.InfoContainer>
      <section>
        <S.InfoTitle id="about" href="https://ooloo.io/employers">
          About
        </S.InfoTitle>
        <S.InfoContent>
          This app was created during a course on profy.dev with the goal to
          implement a pixel-perfect real-world application with professional
          workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests
          and code reviews. Click here for more information.{" "}
        </S.InfoContent>
      </section>
    </S.Info>
  </S.Wrapper>
);

export default Hero;
