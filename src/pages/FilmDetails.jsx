import { useParams } from "react-router";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

//API
import { getFilmInfo, getRelatedFilms } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";
import style from "../css/FilmDetails.module.css";

const FilmDetails = () => {
  const { id } = useParams();

  //get info to the film we clicked on
  const { data, isLoading, error, isError } = useQuery(
    ["filmDetails", id],
    () => {
      return getFilmInfo(id);
    }
  );

  //get data for relatedFilms to the one we clicked on
  const {
    data: relatedFilmData,
    isLoading: relatedFilmIsLoading,
    error: relatedFilmError,
    isError: relatedFilmIsError,
  } = useQuery(["relatedFilms", id], () => {
    return getRelatedFilms(id);
  });

  return (
    <div className={style.supercontainer}>
      {isLoading && <p>Loading....</p>}
      {isError && <p>There has been an error: {error}</p>}
      {data && (
        <div className={style.container}>
          <div key={data.id} className={style.imgwrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={`movie poster for ${data.title}`}
            />
          </div>

          <div className={style.desc}>
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
          </div>

          <div className={style.casts}>
            <h3>Cast Members:</h3>
            {data.casts.cast
              .map((cast) => (
                <div key={cast.id} className={style.castpic}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                    alt={`pic of ${cast.name}`}
                  />
                  <Link to={`/actor-info/${cast.id}`}>{cast.name}</Link>
                </div>
              ))
              .slice(0, 5)}
          </div>

          <div className={style.relatedfilm}>
            <h3>Related Films</h3>
            <div className={gridStyle.container}>
              {relatedFilmIsLoading && <p>Related films are loading ...</p>}
              {relatedFilmIsError && (
                <p>
                  There has been an error with related films: {relatedFilmError}
                </p>
              )}
              {relatedFilmData?.data && (
                <MovieCard movies={relatedFilmData.data.results.slice(0, 8)} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
