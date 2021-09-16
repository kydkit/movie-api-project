import { useQuery } from "react-query";
import { useState } from "react";
import { useLocation } from "react-router";
//API
import { searchData } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
//Styling
import gridStyle from "../css/Grid.module.css";
import SearchForm2 from "../components/SearchForm2";
import NothingHere from "../components/NothingHere";

const SearchResultsPage2 = () => {
  const path = useLocation();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(path.state);
  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["search", page, search],
    () => {
      return searchData(page, search);
    }
  );

  const submitSearch = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    if (e.target.value.length <= 1) {
      return;
    }
    setSearch(e.target.value);
  };

  const resetHandler = () => {
    setPage(1);
    setSearch("");
  };

  return (
    <>
      <SearchForm2
        handleOnSubmit={submitSearch}
        handleOnChange={changeHandler}
        handleOnReset={resetHandler}
      />
      <div className={gridStyle.supercontainer}>
        <h1>Results From Search</h1>

        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}

        {data?.results.length > 0 ? (
          data?.results && (
            <>
              <div className={gridStyle.container}>
                <MovieCard movies={data.results} />
              </div>
              <Pagination
                page={page}
                setPage={setPage}
                isPreviousData={isPreviousData}
                hasMore={data.results[0]}
              />
            </>
          )
        ) : (
          <NothingHere />
        )}
      </div>
    </>
  );
};

export default SearchResultsPage2;
