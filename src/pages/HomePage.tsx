import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import UseMovies from '../hooks/UseMovies';
import { Movie } from '../types/movie';
import MovieFilter from '../components/MovieFilter';
import { useSearchParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [searchParams] = useSearchParams();

  searchParams.set('page', page.toString());

  const genres = searchParams.get('genre')?.split(',');
  const minRating = searchParams.get('minRating') ?? '';
  const maxRating = searchParams.get('maxRating') ?? '';
  const minYear = searchParams.get('minYear') ?? '';
  const maxYear = searchParams.get('maxYear') ?? '';
  const { data, status } = UseMovies(page, '', minYear, maxYear, minRating, maxRating, genres);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto p-4">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error fetching movies.</div>}
      {status === 'success' && (
        <div className="flex flex-col gap-4">
          <button onClick={handleFilterClick} className="border-2 border-gray-400 hover:bg-gray-200 font-bold py-2 px-4 rounded-md w-fit">{isFilterOpen ? 'Hide' : 'Show'} filter</button>
          {isFilterOpen && <MovieFilter />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data?.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="flex justify-center gap-4 my-4">
            <button
              onClick={() => setPage(old => Math.max(old - 1, 1))}
              disabled={page === 1}
              className="w-[100px] border-2 border-blue-300  text-[gray] hover:bg-blue-200 font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(old => old + 1)}
              className="w-[100px] border-2 border-blue-300 hover:bg-blue-200 text-[gray] font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
