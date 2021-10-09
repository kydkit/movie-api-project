import "./App.scss";
import { Route, Switch } from "react-router-dom";

import NowPlayingPage from "./pages/NowPlayingPage";
import Navigation from "./pages/partials/Navigation";
import Home from "./pages/HomePage";
import TopRated from "./pages/TopRated";
import GenresPage from "./pages/GenresPage";
import PageNotFound from "./pages/PageNotFound";
import FilmDetails from "./pages/FilmDetails";
import ActorInfoPage from "./pages/ActorInfoPage";
import SearchResults from "./pages/SearchResultsPage2";
import PrevTen from "./pages/PrevTen";
import TrendingWeeklyPage from "./pages/TrendingWeekly";
import TrendingDailyPage from "./pages/TrendingDaily";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/search-results">
          <SearchResults />
        </Route>

        <Route path="/top-rated">
          <TopRated />
        </Route>

        <Route path="/nowplaying">
          <NowPlayingPage />
        </Route>

        <Route path="/filmdetails/:id">
          <FilmDetails />
        </Route>

        <Route path="/actor-info/:id">
          <ActorInfoPage />
        </Route>

        <Route path="/genres">
          <GenresPage />
        </Route>

        <Route path="/genre/:id/:genretype">
          <GenresPage />
        </Route>

        <Route path="/trending-daily">
          <TrendingDailyPage />
        </Route>

        <Route path="/trending-weekly">
          <TrendingWeeklyPage />
        </Route>

        <Route path="/prev-ten">
          <PrevTen />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
