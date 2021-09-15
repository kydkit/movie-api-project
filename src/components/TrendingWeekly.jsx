import { useQuery } from "react-query";
//API
import { weeklyTrending } from "../services/fetchData";
//Component
import MovieCard from "./MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";

const TrendingWeeklyPage = () => {
  const { data, isLoading, error, isError } = useQuery("weeklyTrending", () => {
    return weeklyTrending();
  });

  return (
    <>
      <div className={gridStyle.container}>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.data.results && <MovieCard movies={data.data.results} />}
      </div>
    </>
  );
};

export default TrendingWeeklyPage;
