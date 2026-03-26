const movies = [
    {id: 1, title: "Inception", genre: "Thriller", year: 2010},
    {id: 2, title: "Dark Knight", genre: "Action", year: 2011},
    {id: 3, title: "Interstellar", genre: "Thriller", year: 2014},
    {id: 4, title: "John Wick", genre: "Action", year: 2014},
    // TRY TO ADD MORE DATA WITH IMAGE
]; // Our API Data

const container = document.getElementById("movie-container");

// Master Function
function displayMovies(data){
    const movieArray = Array.isArray(data) ? data : [data];

    container.innerHTML = movieArray.map(movie => 
        `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text text-muted">${movie.genre} - ${movie.year}</p>
                    </div>
                </div>
            </div>
        `
    ).join('');

}

// Show All Movies
function showAll(){
    displayMovies(movies);
}

// FILTER: Show only Action movies
function filterAction(){
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Action";
    });
    displayMovies(actionMovies);
}

// CREATE A FILTER FUNCTION FOR THRILLER MOVIE

// CREATE A FILTER FUNCTION TO FILTER THE MOVIE WITH THE YEAR OF AFTER 2012

// FIND: Locate one specific movie
function findInception(){
    const trendingMovie = movies.find((movie) => {
        return movie.title === "Inception";
    });
    displayMovies(trendingMovie);
}

// FIND: Search Movie Function
function searchMovie(){
    const userInput = document.getElementById("searchInput").value;

    // VALIDATE THE INPUT FIELD

    const searchedMovie = movies.find((movie) => {
        // reverse engineering -> amazon
        return movie.title.toLowerCase() === userInput.toLowerCase();
    });
    displayMovies(searchedMovie);
}

showAll();