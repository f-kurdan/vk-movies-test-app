import React from 'react'
import { fetchMovieDetails } from '../api/movieApi'
import { useQuery } from 'react-query'

const UseMovieDetails = (id?: string) => {
  return useQuery(['movie', id], () => fetchMovieDetails(id))
}

export default UseMovieDetails