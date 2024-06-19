import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleFavorite } from '../redux/movieSlice';
import { Movie } from '../types/movie';
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.movies.favorites);
  const isFavorite = favorites.some(favMovie => favMovie.id === movie.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(movie));
  };

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="flex flex-col justify-between items-center max-w-sm rounded overflow-hidden shadow-lg h-[450px] ">

      <div className='relative h-[300px] w-full overflow-hidden'>
        {movie.poster ? <img src={movie.poster?.url} alt={movie.name} />
          : <div className='h-[300px] w-full bg-zinc-100' > </div>}
        <span className="absolute top-3 left-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"          >
          {movie.rating.kp}
        </span>
      </div>
      <div className="px-6">
        <p onClick={handleMovieClick} className="font-bold text-md mb-2 hover:text-[orange] focus:text-[gray-600] cursor-pointer">{movie.name}</p>
        <p className='text-[gray]'>
          {movie.year}, {movie.genres ? movie.genres[0].name : null}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleToggleFavorite}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl"
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;