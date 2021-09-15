import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
//API
import { getGenre } from "../services/fetchData";
//Components
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
//Styling
import gridStyle from "../css/Grid.module.css";

const GenreDetails2 = () => {
  const { id, genretype } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["getGenre", id, page],
    () => {
      return getGenre(id, page);
    }
  );

  useEffect(() => {
    data && setPage(data.page);
  }, [data]);

  return (
    <>
      <h1>Movies from {genretype}</h1>
      {data?.results && (
        <div>
          <div className={gridStyle.container}>
            {isLoading && <p>Loading....</p>}
            {isError && <p>There has been an error: {error}</p>}
            {data?.results && <MovieCard movies={data.results} />}
          </div>

          <Pagination
            page={page}
            setPage={setPage}
            isPreviousData={isPreviousData}
            hasMore={data.results[0]}
          />
        </div>
      )}
    </>
  );
};

export default GenreDetails2;
