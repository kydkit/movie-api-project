import React from "react";
import { useQuery } from "react-query";
//API
import { dailyTrending } from "../services/fetchData";
//Component
import MovieCard from "./MovieCard";
//Styling
import gridStyle from "../css/Grid.module.css";

const TrendingDailyPage = () => {
  const { data, isLoading, error, isError } = useQuery("dailyTrending", () => {
    return dailyTrending();
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

export default TrendingDailyPage;
