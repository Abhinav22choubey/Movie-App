export const TMDB_CONFIG={
    BASE_URL:"https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}` // replace with your actual TMDb Bearer token
    }
}
export const fetchMovies =async ({query}:{query:string}) => {
    const endpoint =
        query ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
        `${TMDB_CONFIG.BASE_URL}/discover/movies?sort_by=popularity.desc`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch Movies',response.statusText);
    }
    const data = await response.json();
    return data.results ;
}



// const url = 'https://api.themoviedb.org/3/discover/movie'; // recommended endpoint
//
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWM0ZjBkMjlkNGYxNTJmM2UwZTFjYjcyMGU2OWQ1ZiIsIm5iZiI6MTc2MTI4MTkwOS43ODcwMDAyLCJzdWIiOiI2OGZiMDc3NTFhMjFjNDBjNWQ1ZGRiNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u1LqIcpQ3qyco78EqDvPiPeQHLucRQMiAGbGxECM_Z8' // replace with your actual TMDb Bearer token
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));
