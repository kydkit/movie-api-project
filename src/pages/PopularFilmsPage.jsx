import { useQuery } from "react-query";
//API
import { getPopularFilms } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";

const PopularFilmsPage = () => {
  const { data, isLoading, error, isError } = useQuery("popularFilms", () => {
    return getPopularFilms();
  });

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Popular Films</h1>
      <div className={gridStyle.container}>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.results && <MovieCard movies={data.results} />}
      </div>
    </div>
  );
};

export default PopularFilmsPage;
