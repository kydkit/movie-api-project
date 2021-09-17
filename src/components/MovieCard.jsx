import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
//Styling
import cardStyle from "../css/MovieCard.module.css";

const MovieCard = ({ movies }) => {
  const [savedFilm] = useLocalStorage("setTen", []);

  //storing clicked films to local storage
  const handleClick = (movie) => {
    if (savedFilm.length > 9 && savedFilm.indexOf(movie.id) < 0) {
      savedFilm.pop(9);
    }
    savedFilm.unshift(movie);
    localStorage.setItem("setTen", JSON.stringify(savedFilm));
  };

  return movies.map((movie, i) => (
    <div key={i} className={cardStyle.cards}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`movie poster for ${movie.title}`}
      />
      <Link
        to={{ pathname: `/filmdetails/${movie.id}`, state: `${movie.title}` }}
        className="btn btn-outline-secondary my-3"
        onClick={() => handleClick(movie)}
      >
        Get Info
      </Link>
    </div>
  ));
};

export default MovieCard;
