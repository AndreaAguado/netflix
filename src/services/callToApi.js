const getConfiguration = () => {
    return fetch("https://api.themoviedb.org/3/configuration?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            console.log(response.images.base_url);
        })
}

const getTrendingMedia = () => {
    return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=4e51e4a6310fb8de7132d513c50b9a9a")
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
}
const objectToExport = {
    getConfiguration: getConfiguration,
    getTrendingMedia: getTrendingMedia,
}
export default objectToExport;