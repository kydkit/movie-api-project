import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
//Styling
import cardStyle from "../css/MovieCard.module.css";
import gridStyle from "../css/Grid.module.css";

const PrevClicked = () => {
  const [value] = useLocalStorage("setTen");

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Previously clicked:</h1>
      {value ? (
        <div className={gridStyle.container}>
          {value &&
            value.map((movie, i) => (
              <div key={i} className={cardStyle.cards}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`movie poster for ${movie.title}`}
                />
                <Link
                  to={{
                    pathname: `/filmdetails/${movie.id}`,
                    state: `${movie.title}`,
                  }}
                  className="btn btn-outline-secondary my-3"
                >
                  Get Info
                </Link>
              </div>
            ))}
        </div>
      ) : (
        <p>Click on some movies ... and list will appear 🔮 </p>
      )}
    </div>
  );
};

export default PrevClicked;
