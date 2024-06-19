import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';



interface MoviesState {
    movies: Movie[];
    movieDetails: Movie | null;
    favorites: Movie[];
    status: 'idle' | 'loading' | 'failed';
    page: number;
}

const initialState: MoviesState = {
    movies: [],
    movieDetails: null,
    favorites: [],
    status: 'idle',
    page: 1,
};

// export const getMovies = createAsyncThunk('movies/getMovies', async (page: number) => {
//     const response = await fetchMovies(page);
//     return response.docs;
// });

// export const getMovieDetails = createAsyncThunk('movies/getMovieDetails', async (id: number) => {
//     const response = await fetchMovieDetails(id);
//     return response;
// });

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setPage: (state, action: PayloadAction<number>) => {
        state.page = action.payload;
      },
      setMovieDetails: (state, action: PayloadAction<Movie | null>) => {
        state.movieDetails = action.payload;
      },
      toggleFavorite: (state, action: PayloadAction<Movie>) => {
        const index = state.favorites.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index >= 0) {
          state.favorites.splice(index, 1);
        } else {
          state.favorites.push(action.payload);
        }
      },
    },
  });
  
  export const { setPage, setMovieDetails, toggleFavorite } = movieSlice.actions;
  
  export default movieSlice.reducer;