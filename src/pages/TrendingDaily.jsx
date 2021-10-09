import { useQuery } from "react-query";
import { useHistory } from "react-router";
//API
import { dailyTrending } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";
import style from "../css/Trending.module.css";

const TrendingDailyPage = () => {
  const history = useHistory();
  const { data, isLoading, error, isError } = useQuery("dailyTrending", () => {
    return dailyTrending();
  });

  const handleWeekly = () => {
    history.push("/trending-weekly");
  };

  return (
    <>
      <h1>Trending Daily</h1>
      <p className={style.text} onClick={handleWeekly}>
        Click for weekly trends
      </p>
      <div className={gridStyle.container}>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.data.results && <MovieCard movies={data.data.results} />}
      </div>
    </>
  );
};

export default TrendingDailyPage;
