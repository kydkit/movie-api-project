import { useQuery } from "react-query";
import { useParams, useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
//API
import { getGenre } from "../services/fetchData";
import { getGenres } from "../services/fetchData";
//components
import GenreButtons from "../components/GenreButtons";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import WelcomeGenreDetails from "../components/WelcomeGenreDetails";
//Styling
import gridStyle from "../css/Grid.module.css";

const GenrePage = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  //params to get genre id and genre name
  const { id, genretype } = useParams();

  // const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1, q: "" },
    { page: Number }
  );
  const [page, setPage] = useState(searchParams.page);

  const {
    data: buttonData,
    isLoading: buttonIsLoading,
    error: buttonError,
    isError: buttonIsError,
  } = useQuery("getGenres", () => {
    return getGenres();
  });

  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["getGenre", id, searchParams.page],
    () => {
      return getGenre(id, searchParams.page);
    }
  );

  useEffect(() => {
    setSearchParams({ ...searchParams, page });
  }, [id, page]);

  console.log("pathname", pathname);
  console.log("history", history);

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Genres</h1>

      <div>
        {buttonIsLoading && <p>Loading....</p>}
        {buttonIsError && <p>There has been an error: {buttonError}</p>}
        {buttonData?.genres && (
          <GenreButtons genreButtons={buttonData.genres} />
        )}
      </div>

      <div>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {id ? (
          data?.results && (
            <>
              <h1>Movies from {genretype}</h1>
              <Pagination
                page={searchParams.page}
                setPage={setPage}
                isPreviousData={isPreviousData}
                hasMore={data.results[0]}
              />
              <div className={gridStyle.container}>
                <MovieCard movies={data.results} />
              </div>
            </>
          )
        ) : (
          <WelcomeGenreDetails />
        )}
      </div>
    </div>
  );
};

export default GenrePage;
