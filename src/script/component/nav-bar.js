import Logo from '../../../assets/img/filmy_logo.png';
class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .navbar {
            background-color: #000000 !important;
        }
        
        .navbar-brand {
            width: 100%;
        }
        
        .navbar img {
            display: block;
            margin: 0 auto;
            width: 20%;
        }
        
        @media only screen and (max-width: 820px) {
            .navbar img {
                width: 50%;
            }
        }
        </style>
        <nav class="navbar bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="${Logo}" alt="Logo" class="align-text-top nav-img">
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);