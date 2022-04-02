class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        nav{
            font-size: 20px;
        }
        
        #nav-content{
            margin-left: 5%;
            padding: 10px;
        }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid" id="nav-content">
          <a class="navbar-brand" href="#">FILMKU</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
    }
}

customElements.define("app-bar", AppBar);