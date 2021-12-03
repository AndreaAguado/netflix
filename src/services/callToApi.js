const getConfiguration = () => {
    return fetch("https://api.themoviedb.org/3/configuration?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const result = response.images.secure_base_url + response.images.backdrop_sizes[3];
            return result;
        })
}

const getTrendingMedia = () => {
    return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response.results.map((movie => {
                return {
                    id: movie.id,
                    imagePath: movie.poster_path,
                    titleMovie: movie.original_title,
                    titleShow: movie.name,
                    mediaType: movie.media_type,
                    genre: movie.genre_ids,
                    banner: movie.backdrop_path,
                    overview: movie.overview
                }
            }))
        })
}
const objectToExport = {
    getConfiguration: getConfiguration,
    getTrendingMedia: getTrendingMedia,
}
export default objectToExport;