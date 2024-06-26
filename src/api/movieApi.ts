import axios from 'axios';
import { Movie } from '../types/movie';

const API_KEY = process.env.REACT_APP_KINOPOISK_API_KEY;
const BASE_URL = 'https://api.kinopoisk.dev/v1.4';

export const fetchMovies = async (page: number, query?: string, minYear?: string, maxYear?: string, minRating?: string, maxRating?: string, genres?: string[]): Promise<Movie[]> => {
  let genresQuery = '';
  if (genres) {
    genres.forEach((genre, index) => {
      genresQuery += `genres.name=${genre}&`;
    });
  }
  const request = `${BASE_URL}/movie?page=${page}&limit=50&selectFields=id&selectFields=name&selectFields=poster&selectFields=rating&selectFields=year&selectFields=genres&selectFields=description&query=${query}&year=${minYear}-${maxYear}&rating.kp=${minRating}-${maxRating}&${genresQuery}`;

  const response = await axios.get(request,
    {
      headers: {
        'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
      },
    }
  );
  
  return response.data.docs;  
};

export const fetchMovieDetails = async (id?: string) : Promise<Movie> => {
  const response = await axios.get(
    `https://api.kinopoisk.dev/v1.3/movie/${id}`,
    {
      headers: {
        'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
      },
    }
  );
  return response.data;
};
