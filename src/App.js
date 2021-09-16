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
import TrendingPage from "./pages/TrendingPage";
import SearchResults from "./pages/SearchResultsPage2";

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

        <Route path="/trending">
          <TrendingPage />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
