import SearchForm2 from "../components/SearchForm2";
import Popular from "./PopularFilmsPage";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    history.push("/search-results", [search]);
  };

  const changeHandler = (e) => {
    if (e.target.value.length < 1) {
      return search;
    }
    setSearch(e.target.value);
  };

  const resetHandler = () => {
    setSearch("");
  };

  return (
    <div>
      <SearchForm2
        handleOnSubmit={submitSearch}
        handleOnChange={changeHandler}
        handleOnReset={resetHandler}
      />
      <Popular />
    </div>
  );
};

export default HomePage;
