import '../component/search-section.js';
import NotFound from '../../../assets/img/not_found.svg';

// OMDB API
const omdb_apikey = "eaf9afa1";
const omdb_url = `http://www.omdbapi.com/?apikey=${omdb_apikey}&s=`;

const searchMovie = async (title) => {
    const response = await fetch(`${omdb_url}${title}`);
    return response.json();
};

const getDetailMovie = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${omdb_apikey}&i=${id}`);
    return response.json();
};

// TMDB API
const tmdb_apikey = "8edfdd820bcb638a5cf04d87e9ac672e";
const tmdb_url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_apikey}&language=en-US&page=1`;


const getMostPopularMovies = async () => {
    const response = await fetch(tmdb_url);
    return response.json();
};

const getTrailerMovies = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdb_apikey}&language=en-US`);
    const result = await response.json();
    const trailer = result.results.find(video => video.type == "Trailer");
    return trailer;
};

const main = () => {
    // Search movies
    const keyword = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    const movieContent = document.getElementById('movie-content');
    searchButton.addEventListener('click', async () => {
        const result = await searchMovie(keyword.value);
        if (result.Response == "True") {
            movieContent.innerHTML = '';
            result.Search.forEach(async (movie) => {
                const moviePlot = await getDetailMovie(movie.imdbID);
                const trailer = await getTrailerMovies(movie.imdbID);

                movieContent.innerHTML += `
                <div class="col-md-6 col-lg-4 col-xxl-3">
                    <div class="card movie-card" style="width: 18rem;">
                        <img src="${movie.Poster}" class="card-img-top movie-poster rounded-4"
                            alt="movie poster">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-year">(${movie.Year})</h6>
                            <p class="card-text">${moviePlot.Plot.substr(0, 100)}...</p>
                            <a href="https://www.youtube.com/watch?v=${trailer.key}" target="_blank" class="btn btn-movie"><i class="fa-solid fa-play"></i> Trailer</a>
                        </div>
                    </div>
                </div>
                `;
            });
        } else {
            movieContent.innerHTML = '';
            movieContent.innerHTML = `
            <style>
            .not-found{
                display: block;
                margin: 2% auto 2% auto;
                width: 30%;
            }
            
            .not-found-desc{
                text-align: center;
                margin-bottom: 5%;
                color: #FB2576;
            }
            
            @media only screen and (max-width: 820px){
                .not-found{
                    width: 80%;
                }
            }
            </style>
            <div class="col-12">
                <img src="${NotFound}" alt="not found" class="not-found">
                <h4 class="not-found-desc">Ooops, your movie may have been taken to another world</h4>
            </div>
            `;
        }
    });

    // Popular movies
    const popularMovies = async () => {
        const result = await getMostPopularMovies();
        const popularMovieContent = document.getElementById('popular-content');
        for (let i = 0; i < 12; i++) {
            const trailer = await getTrailerMovies(result.results[i].id);

            popularMovieContent.innerHTML += `
            <div class="col-md-6 col-lg-4 col-xxl-3">
                <div class="card movie-card" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/original/${result.results[i].poster_path}" class="card-img-top movie-poster rounded-4"
                        alt="movie poster">
                    <div class="card-body">
                        <h5 class="card-title">${result.results[i].original_title}</h5>
                        <h6 class="card-year">(${result.results[i].release_date.split('-')[0]})</h6>
                        <p class="card-text">${result.results[i].overview.substr(0, 100)}...</p>
                        <a href="https://www.youtube.com/watch?v=${trailer.key}" target="_blank" class="btn btn-movie"><i class="fa-solid fa-play"></i> Trailer</a>
                    </div>
                </div>
            </div>
            `;
        }
    }
    popularMovies();
}

export default main;