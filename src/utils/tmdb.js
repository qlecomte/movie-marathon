import axios from 'axios';

const apiKey = '33925c64e502e7b500fd354313d83f89';

function getMovie(movieId) {
	return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr-FR`)
}

function search(query){
	return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${query}&page=1`)
}

export default {
	getMovie: getMovie,
	search: search
}
