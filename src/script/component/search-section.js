import SearchIcon from '../../../assets/img/search-rocket.png';
class SearchSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .search {
            background-color: #150050;
        }
        
        .btn-search {
            width: 40px;
            padding: 0;
            background-color: #FB2576;
        }
        
        .btn-search:hover {
            background-color: #f90060;
        }
        
        .search-rocket {
            width: 20px;
            display: block;
            padding: 0;
            margin: 0 auto;
        }
        
        .search-desc {
            margin-top: 10%;
            min-height: 20vh;
            align-items: center;
            text-align: right;
            color: #FB2576;
        }

        .search-desc h2 {
            font-weight: bold;
        }
        
        .movie-input {
            margin-top: 17%;
        }

        @media only screen and (max-width: 820px) {
            .search-desc {
                text-align: center;
                min-height: 0;
                margin-bottom: 5%;
            }
        
            .movie-input {
                margin-top: 0;
                margin-bottom: 10% !important;
                min-height: 0%;
            }
        }
        </style>
        <div class="search">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4 search-desc">
                        <h2>Let's begin our journey!</h2>
                        <p>Find the title of the movie that you're looking for!</p>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="input-group mb-3 movie-input">
                            <input type="text" class="form-control" id="search-bar" placeholder="Movie title"
                                aria-label="Movie title" aria-describedby="search-button">
                            <button class="btn btn-search" type="button" id="search-button"><img
                                    src="${SearchIcon}" class="search-rocket"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("search-section", SearchSection);