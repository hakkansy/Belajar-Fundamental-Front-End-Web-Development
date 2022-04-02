class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <div class="row mt-3 justify-content-center search-bar" id="search-bar-atas">
            <div class="col-md-6 ">
                <h3 class="text-center mb-3"> SEARCH FILMKU</h3>
                <div class="input-group mb-3 search">
                    <input type="text" class="form-control" placeholder="Input Movie Title" id="searchElement">
                    <div class="input-group-append">
                        <button class="btn btn-outline-dark" type="button" id="searchButtonElement">Search</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);