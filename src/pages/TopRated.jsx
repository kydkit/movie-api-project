import { useQuery } from "react-query";
//API
import { getTopRated } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";

const TopRated = () => {
  const { data, isLoading, error, isError } = useQuery(["topRated"], () => {
    return getTopRated();
  });

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Top Rated</h1>
      <div className={gridStyle.container}>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.results && <MovieCard movies={data.results} />}
      </div>
    </div>
  );
};

export default TopRated;
