import { useState } from "react";
//Components
import TrendingDaily from "../components/TrendingDaily";
import TrendingWeekly from "../components/TrendingWeekly";
//Styling
import style from "../css/Trending.module.css";
import gridStyle from "../css/Grid.module.css";

const TrendingPage = () => {
  const [daily, setDaily] = useState(true);
  const toggleButton = () => {
    setDaily(!daily);
  };

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Trending {daily ? "Daily" : "Weekly"}</h1>
      <p className={style.text} onClick={toggleButton}>
        Click for {daily ? "weekly" : "daily"} trends
      </p>
      {daily ? <TrendingDaily /> : <TrendingWeekly />}
    </div>
  );
};

export default TrendingPage;
