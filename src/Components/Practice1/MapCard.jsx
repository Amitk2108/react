import Movies from "./movie.json";
import Mcard from "./Mcard";

const MapCard = () => {
  return (
    <div>
      <div>
        <h1>Movies Data</h1>
      </div>

      <div className="main">
        {Movies.map((element) => {
          return (
            <Mcard
              key={element.imdbID}
              title={element.Title}
              poster={element.Poster}
              year={element.Year}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MapCard;
