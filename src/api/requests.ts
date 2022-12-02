const API_KEY = 'e388c066698fed551501fb44d5922327';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    searchMovies: (search: string) => `/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`,
    fetchMovieDetails:  (movieId: string | undefined) => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    fetchMovieCredits:  (movieId: string | undefined) => `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    fetchMovieReviews:  (movieId: string | undefined) => `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    fetchSimilarMovies:  (movieId: string | undefined) => `movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`
}

export default requests