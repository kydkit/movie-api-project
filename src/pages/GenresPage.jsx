import { useQuery } from "react-query";
import { useParams } from "react-router";
import { useState } from "react";
//API
import { getGenre } from "../services/fetchData";
import { getGenres } from "../services/fetchData";
//components
import GenreButtons from "../components/GenreButtons";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";

const GenrePage = () => {
  const { id, genretype } = useParams();
  const [page, setPage] = useState(1);

  const {
    data: buttonData,
    isLoading: buttonIsLoading,
    error: buttonError,
    isError: buttonIsError,
  } = useQuery("getGenres", () => {
    return getGenres();
  });

  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["getGenre", id, page],
    () => {
      return getGenre(id, page);
    }
  );

  // useEffect(() => {
  //   data && setPage(data.page);
  // }, [data]);

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

      {data?.results && (
        <div>
          <h1>Movies from {genretype}</h1>
          <div className={gridStyle.container}>
            {isLoading && <p>Loading....</p>}
            {isError && <p>There has been an error: {error}</p>}
            {data?.results && (
              <>
                <MovieCard movies={data.results} />
                <Pagination
                  page={page}
                  setPage={setPage}
                  isPreviousData={isPreviousData}
                  hasMore={data.results[0]}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenrePage;
