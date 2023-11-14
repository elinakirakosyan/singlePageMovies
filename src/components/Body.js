import RecomendedSection from "./RecommendedSection";
import data from "../data.json";
import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import ReactPlayer from "react-player";

const Body = ({ featuredItem, setFeaturedItem, isNavbarOpen }) => {
  const [isPlayerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setPlayerReady(true);
    }, 2000);
    return () => {
      clearTimeout(delay);
      setPlayerReady(false);
    };
  }, [featuredItem.Id]);

  return (
    <div className={"body-wrapper"}>
      {isNavbarOpen && <div className="gradient-body-wrapper"></div>}
      {isPlayerReady && (
        <ReactPlayer
          url={featuredItem.VideoUrl}
          playing={true}
          loop={true}
          width="100%"
          height="99%"
          className="react-player"
        />
      )}
      <div
        className="content-overlay"
        style={{
          backgroundImage: `url(/assets/${featuredItem.CoverImage})`,
        }}
      />
      <MovieDetails current={featuredItem} />
      <RecomendedSection
        recommendedItems={data.TendingNow}
        setFeaturedItem={setFeaturedItem}
      />
    </div>
  );
};

export default Body;
