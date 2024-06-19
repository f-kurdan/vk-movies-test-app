import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import UseMovieDetails from '../hooks/UseMovieDetails';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: movieDetails, status } = UseMovieDetails(id);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching movie details.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <img
          className="w-full lg:w-1/3"
          src={movieDetails?.poster?.url}
          alt={movieDetails?.name}
        />
        <div className="flex flex-col p-4">
          <h1 className="text-4xl font-bold mb-4">{movieDetails?.name}</h1>
          <p className="mb-4">{movieDetails?.description}</p>
          <p className="mb-4">
            <strong>Rating:</strong> {movieDetails?.rating?.kp}
          </p>
          <p className="mb-4">
            <strong>Release Date:</strong> {movieDetails?.year}
          </p>
          <div className="mb-4">
            <strong>Genres:</strong>{' '}
            {movieDetails?.genres?.map((genre) => (
              <span
                key={genre.name}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
// {movie.genres?.map((genre) => (
//   <span
//     key={genre.name}
//     className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//   >
//     {genre.name}
//   </span>
// ))}