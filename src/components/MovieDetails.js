import React from "react";
import playIcon from "../assets/icons/play.png";

function formatDuration(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);

  const hoursString = hours > 0 ? `${hours}h ` : "";
  const minutesString = minutes > 0 ? `${minutes}m` : "";

  return `${hoursString}${minutesString}`;
}

function MovieDetails({ current }) {
  return (
    <div className="main-layout-wrapper">
      <span>{current.Category.toUpperCase()}</span>
      <img
        src={`/assets/${current.TitleImage}`}
        alt="titleImage"
        className="titleImage"
      />
      {/*I can't understand what data to show here. The documentation says to show movie logo, I thought that it was the TitleImage inside json data. Hovewer I also add this line below(comented) for the case to show only title */}

      {/* <h1>{current.Title}</h1> */}
      <div>
        {current.ReleaseYear} {current.MpaRating}{" "}
        {formatDuration(current.Duration)}
      </div>
      <div>{current.Description}</div>
      <div className="btn-block">
        <button className="btn play">
          <img src={playIcon} alt="play" />
          Play
        </button>
        <button className="btn more">More info</button>
      </div>
    </div>
  );
}

export default MovieDetails;
