import { Link } from "react-router-dom";
//Styling
import cardStyle from "../css/MovieCard.module.css";

const MovieCard = ({ movies }) => {
  return movies.map((movie, i) => (
    <div key={i} className={cardStyle.cards}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`movie poster for ${movie.title}`}
      />
      <Link
        to={`/filmdetails/${movie.id}`}
        className="btn btn-outline-secondary my-3"
      >
        Get Info
      </Link>
    </div>
  ));
};

export default MovieCard;
