import "./App.scss";
import { Route, Switch } from "react-router-dom";

import NowPlayingPage from "./pages/NowPlayingPage";
import Navigation from "./pages/partials/Navigation";
import PopularFilmsPage from "./pages/PopularFilmsPage";
import TopRated from "./pages/TopRated";
import GenresPage from "./pages/GenresPageNew";
import PageNotFound from "./pages/PageNotFound";
import FilmDetails from "./pages/FilmDetails";
import ActorInfoPage from "./pages/ActorInfoPage";
import TrendingPage from "./pages/TrendingPage";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <PopularFilmsPage />
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
