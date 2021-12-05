const getConfiguration = () => {
    return fetch("https://api.themoviedb.org/3/configuration?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            const result = response.images.secure_base_url + response.images.backdrop_sizes[3];
            return result;
        })
}

const getNumberOfPages = () => {
    return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            return response.total_pages;
        })
}

const getTrendingMedia = (page_num) => {
    return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4e51e4a6310fb8de7132d513c50b9a9a&page=${page_num}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response.results.map((movie => {
                return {
                    id: movie.id,
                    imagePath: movie.poster_path,
                    titleMovie: movie.title,
                    originalTitleMovie: movie.original_title,
                    titleShow: movie.name,
                    originalTitleShow: movie.original_name,
                    mediaType: movie.media_type,
                    genre: movie.genre_ids,
                    banner: movie.backdrop_path,
                    overview: movie.overview
                }
            }))
        })
}

const getMovieGenres = () => {
    return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4e51e4a6310fb8de7132d513c50b9a9a&language=en-US")
        .then(response => response.json())
        .then(response => {
            return response.genres.map((genre) => {
                return {
                    id: genre.id,
                    name: genre.name
                }
            })
        })
}

const getShowGenres = () => {
    return fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=4e51e4a6310fb8de7132d513c50b9a9a&language=en-US")
        .then(response => response.json())
        .then(response => {
            return response.genres.map((genre) => {
                return {
                    id: genre.id,
                    name: genre.name
                }
            })
        })
}
const objectToExport = {
    getConfiguration: getConfiguration,
    getNumberOfPages: getNumberOfPages,
    getTrendingMedia: getTrendingMedia,
    getMovieGenres: getMovieGenres,
    getShowGenres: getShowGenres
}
export default objectToExport;