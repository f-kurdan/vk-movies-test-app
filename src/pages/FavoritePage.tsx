import React from 'react';
import { useAppSelector } from '../redux/hooks';
import MovieCard from '../components/MovieCard';

const FavoritesPage: React.FC = () => {
  const favorites = useAppSelector(state => state.movies.favorites);

  if (favorites.length === 0) {
    return <div className="container mx-auto p-4">No favorite movies.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
