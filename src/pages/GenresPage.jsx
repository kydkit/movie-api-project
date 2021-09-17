import { useQuery } from "react-query";
import { useParams } from "react-router";
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
  //params to get genre id and genre name
  const { id, genretype } = useParams();
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  );
  const [page, setPage] = useState(searchParams.page);

  //get data for genre buttons
  const {
    data: buttonData,
    isLoading: buttonIsLoading,
    error: buttonError,
    isError: buttonIsError,
  } = useQuery("getGenres", () => {
    return getGenres();
  });

  //get data for genre results
  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["getGenre", id, searchParams.page],
    () => {
      return getGenre(id, searchParams.page);
    },
    { keepPreviousData: true }
  );

  useEffect(() => {
    setSearchParams({ ...searchParams, page });
    // eslint-disable-next-line
  }, [id, page]);

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
        {id ? <h1>Genre: {genretype}</h1> : ""}
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}

        {id ? (
          data?.results && (
            <>
              <div className={gridStyle.container}>
                <MovieCard movies={data.results} />
              </div>
              <Pagination
                page={searchParams.page}
                setPage={setPage}
                isPreviousData={isPreviousData}
                hasMore={data.results[0]}
              />
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
