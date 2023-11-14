import { keyBy, sortBy } from "lodash";
import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  rows: 1,
  arrows: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
};

const getSessionIds = () =>
  JSON.parse(sessionStorage.getItem("recentlyViewedMovieIds")) || [];
const RecommendedSection = ({ recommendedItems, setFeaturedItem }) => {
  const [recentlyViewedMovieIds, setRecentlyViewedMovieIds] = useState([]);

  useEffect(() => {
    setRecentlyViewedMovieIds(getSessionIds());
  }, []);

  const sortedRecommendedItems = useMemo(() => {
    return sortBy(recommendedItems, (r) => new Date(r.Date)).reverse();
  }, [recommendedItems]);
  const recentlyViewedMovieIdsSet = useMemo(
    () => new Set(recentlyViewedMovieIds),
    [recentlyViewedMovieIds]
  );
  const recommendedMoviesById = useMemo(
    () => keyBy(recommendedItems, "Id"),
    [recommendedItems]
  );
  const sortedBy = useMemo(() => {
    if (recentlyViewedMovieIds.length === 0) {
      return sortedRecommendedItems;
    } else {
      const otherMovies = sortedRecommendedItems.filter(
        ({ Id }) => !recentlyViewedMovieIdsSet.has(Id)
      );
      return [
        ...recentlyViewedMovieIds.map((id) => recommendedMoviesById[id]),
        ...otherMovies,
      ];
    }
  }, [
    sortedRecommendedItems,
    recommendedMoviesById,
    recentlyViewedMovieIds,
    recentlyViewedMovieIdsSet,
  ]);

  const handleMovieClick = (movie) => {
    const sessionIds = getSessionIds();
    // Updating the movies array with the recently clicked movie at the beginning
    const updatedMovieIds = [
      movie.Id,
      ...sessionIds.filter((id) => id !== movie.Id),
    ];

    // Saving the updated movies array to local storage
    sessionStorage.setItem(
      "recentlyViewedMovieIds",
      JSON.stringify(updatedMovieIds)
    );
    // Updating the state with the new movies array
    setFeaturedItem(movie);
  };

  return (
    <div className="slider-wrapper">
      <h3> Trending Now</h3>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {sortedBy.map((each, idx) => (
            <img
              className="slider-img"
              key={idx}
              src={`/assets/${each.CoverImage}`}
              alt="CoverImage"
              height="170px"
              onClick={() => handleMovieClick(each)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedSection;
