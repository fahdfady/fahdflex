const key = 'fcf85d3e0c3a55162d725041dbc16a91';
const link = "https://api.themoviedb.org/3/"

const requests = {
    requestPopular: `${link}movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `${link}movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `${link}movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `${link}search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `${link}movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;