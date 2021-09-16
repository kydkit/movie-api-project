import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
const API_KEY = `api_key=${KEY}`;

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getTopRated = async () => {
  return await get(`/movie/top_rated?page=1&region=us&${API_KEY}`);
};

export const getPopularFilms = async () => {
  return await get(
    `/discover/movie?sort_by=popularity.desc&region=us&${API_KEY}`
  );
};

export const getNowPlaying = async () => {
  return await get(`/movie/now_playing?page=1&region=us&${API_KEY}`);
};

//additionally the "append_to_response=casts" is used for efficiently fetching the casts
export const getFilmInfo = async (movieId) => {
  return await get(
    `/movie/${movieId}?language=en-US&${API_KEY}&append_to_response=casts`
  );
};

//info on actor
export const getActorInfo = async (personId) => {
  return await get(
    `/person/${personId}?${API_KEY}&append_to_response=movie_credits`
  );
};

//fetch lists of genres
export const getGenres = async () => {
  return await get(`/genre/movie/list?${API_KEY}`);
};

export const getGenre = async (id, page) => {
  const response = await axios.get(
    `/discover/movie?page=${page}&with_genres=${id}&${API_KEY}`
  );
  return response.data;
};

//VG
export const getRelatedFilms = async (movieId) => {
  return await axios.get(`/movie/${movieId}/similar?${API_KEY}&page=1`);
};

export const dailyTrending = async () => {
  return await axios.get(`/trending/movie/day?${API_KEY}`);
};

export const weeklyTrending = async () => {
  return await axios.get(`/trending/movie/week?${API_KEY}`);
};

export const searchData = async (page, q = null) => {
  if (!q) {
    return;
  }
  const response = await axios.get(
    `/search/movie?language=en-US&query=${q}&page=${page}&${API_KEY}`
  );
  return response.data;
};
