import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
//API
import { getActorInfo } from "../services/fetchData";
//Component
import MovieCard from "../components/MovieCard";
//Styling
import { Button } from "react-bootstrap";
import gridStyle from "../css/Grid.module.css";
import style from "../css/ActorDetails.module.css";

const ActorInfoPage = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const { data, isLoading, error, isError } = useQuery("personInfo", () => {
    return getActorInfo(id);
  });
  const { id } = useParams();

  return (
    <div className={style.supercontainer}>
      <div className={style.container}>
        {isLoading && <p>Loading ... </p>}
        {isError && <p>There has been an error: {error} </p>}
        {data && (
          <>
            <div className={style.imgwrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
                alt={`profile_pic of ${data.name}`}
              />
            </div>

            <div className={style.desc}>
              <h3>{data.name}</h3>
              {isTruncated ? (
                <p>
                  {data.biography.slice(0, 200)}
                  <Button
                    className="btn btn-secondary btn-sm mx-3"
                    onClick={() => setIsTruncated(!isTruncated)}
                  >
                    Read More
                  </Button>{" "}
                </p>
              ) : (
                <p>
                  {data.biography}
                  <Button
                    className="btn btn-secondary btn-sm mx-3"
                    onClick={() => setIsTruncated(true)}
                  >
                    Read Less
                  </Button>
                </p>
              )}
            </div>

            <div className={style.relatedfilm}>
              <h3>Other films</h3>
              <div className={gridStyle.container}>
                {data.movie_credits.cast && (
                  <MovieCard movies={data.movie_credits.cast.slice(0, 8)} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActorInfoPage;
