import "../component/app-bar.js";
import "../component/search-bar";
import "../component/movie-list";
import { async } from "regenerator-runtime";
import axios from "axios";

const API_KEY = "api_key=gunakan API key yang diambil dari  https://www.themoviedb.org/documentation/api";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/discover/movie?sort_by=release_data.desc&${API_KEY}`;
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

const main = () =>{
    const appBar = document.querySelector("app-bar");
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const renderError = (message) => {
        movieListElement.renderError(message);
    }

    const renderResult = (result) => {
        movieListElement.innerHTML = "";
        movieListElement.movies = result;
    }

    const getMovie = async (url) => {
        try{
            await axios({
                method: "get",
                url,
            }).then((response)=>{
                const movies = response.data.results;
                renderResult(movies);
            });
        }catch(error){
            console.log(error);
        }
    }

    const searchMovie = (keyword) => {
        if(keyword.length<1){
            getMovie(API_URL);
        }else{
            const url = `${searchURL}&query=${keyword}`;
            getMovie(url);
        }
    }

    const onButtonSearchClicked = async () => {
        const keyword = await searchElement.value;
        searchMovie(keyword);
    }

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;