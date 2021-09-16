import { Link } from "react-router-dom";
//styling
import style from "../css/GenreButtons.module.css";

const GenreButtons = ({ genreButtons }) => {
  return (
    <div className={style.supercontainer}>
      <div className={style.container}>
        {genreButtons.map((button) => (
          <Link
            key={button.id}
            to={`/genre/${button.id}/${button.name}`}
            className="btn btn-dark btn m-2"
          >
            {button.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreButtons;
