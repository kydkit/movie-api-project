import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
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

const SearchPage = () => {
  const path = useLocation();
  const [searchParams, setSearchParams] = useUrlSearchParams(
    //path.state is initial value which is being sent in useHistory url from home page
    { page: 1, q: path.state },
    { page: Number }
  );
  const [page, setPage] = useState(searchParams.page);
  const [search, setSearch] = useState("");

  const { data, isLoading, error, isError, isPreviousData } = useQuery(
    ["search", searchParams.page, searchParams.q],
    () => {
      return searchData(searchParams);
    },
    {
      keepPreviousData: true,
    }
  );

  const submitSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchParams({ ...searchParams, page, q: search });
  };

  const changeHandler = (e) => {
    if (e.target.value.length <= 1) {
      return;
    }
    setSearch(e.target.value);
  };

  const resetHandler = () => {
    setSearchParams({ page: 1, q: "" });
  };

  //when page changes, the page value is changed in the url params.
  //searchParams.page gets sent to api endpoint to fetch the correct page
  useEffect(() => {
    setSearchParams({ ...searchParams, page });
    // eslint-disable-next-line
  }, [page]);

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

export default SearchPage;
