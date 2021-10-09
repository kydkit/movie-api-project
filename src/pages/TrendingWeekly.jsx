import { useQuery } from "react-query";
import { useHistory } from "react-router";
//API
import { weeklyTrending } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";
import style from "../css/Trending.module.css";

const TrendingWeeklyPage = () => {
  const history = useHistory();
  const { data, isLoading, error, isError } = useQuery("weeklyTrending", () => {
    return weeklyTrending();
  });

  const handleDaily = () => {
    history.push("/trending-daily");
  };

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Trending Weekly</h1>
      <p className={style.text} onClick={handleDaily}>
        Click for daily trends
      </p>
      <div className={gridStyle.container}>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.data.results && <MovieCard movies={data.data.results} />}
      </div>
    </div>
  );
};

export default TrendingWeeklyPage;
