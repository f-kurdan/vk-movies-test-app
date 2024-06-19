import React from 'react'
import { useQuery } from 'react-query'
import { fetchMovies } from '../api/movieApi'

const UseMovies = (page: number, query: string, minYear?: string, maxYear?: string, minRating?: string, maxRating?: string, genres?: string[]) => {
  return useQuery(['movies', page, query, minYear, maxYear, minRating, maxRating, genres], () => fetchMovies(page, query, minYear, maxYear, minRating, maxRating, genres), {
    keepPreviousData: true,
  });
}

export default UseMovies