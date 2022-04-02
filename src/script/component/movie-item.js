class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <div class="card mb-3" style="width: 18rem; padding:10px; display:flex; height:460px; ">
            <img src="http://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="..." height="350">
            <div class="card-body">
                <h6 class="card-title text-center">${this._movie.title}</h6>
                <h6 class="card-title text-center">${this._movie.release_date}</h6>
                </div>
        </div>
        `;
    }

}

customElements.define("movie-item", MovieItem);