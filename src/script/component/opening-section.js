import Movie from '../../../assets/img/movie.svg';
class OpeningSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .opening {
            background-color: #3F0071;
            min-height: 100vh;
        }

        .home-desc {
            margin-top: 25%;
            min-height: 20vh;
            align-items: center;
            text-align: right;
            color: #FB2576;
        }
        
        .home-desc h1 {
            font-weight: bold;
            font-size: 6rem;
        }
        
        .home-pic {
            width: 75%;
            display: block;
            margin: 45% auto 10% auto;
        }
        
        @media only screen and (max-width: 820px) {
            .home-desc {
                text-align: center;
                margin-top: 10%;
            }

            .home-desc h1{
                font-size: 3rem;
                margin-top: 10%;
            }

            .home-pic {
                margin: 35% auto 0 auto;
            }
        }
        </style>
        <div class="opening">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-5 order-lg-2">
                        <img src="${Movie}" alt="Movie sticker" class="home-pic">
                    </div>
                    <div class="col-12 col-lg-7 home-desc">
                        <h1>Find your favorite movies here!</h1>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("opening-section", OpeningSection);