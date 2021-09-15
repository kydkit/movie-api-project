import { useQuery } from "react-query";
import { getGenres } from "../services/fetchData";
import { useParams } from "react-router";
//components
import GenreButtons from "../components/GenreButtons";
import GenreDetails2 from "../components/GenreDetails2";
import WelcomeGenreDetails from "../components/WelcomeGenreDetails";
//Styling
import gridStyle from "../css/Grid.module.css";

const GenrePage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery("getGenres", () => {
    return getGenres();
  });

  return (
    <div className={gridStyle.supercontainer}>
      <h1>Genres</h1>
      <div>
        {isLoading && <p>Loading....</p>}
        {isError && <p>There has been an error: {error}</p>}
        {data?.genres && <GenreButtons genreButtons={data.genres} />}
      </div>
      {id ? <GenreDetails2 /> : <WelcomeGenreDetails />}
    </div>
  );
};

export default GenrePage;
