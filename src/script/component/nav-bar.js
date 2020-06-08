class NavBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    set clickEvent2(event) {
        this._clickEvent2 = event;
        this.render();
    }
    
    set clickEvent3(event) {
        this._clickEvent3 = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            border-bottom: gray thin solid;
            padding: 20px;
            box-sizing : border-box ;
            background-color: white;
            display: flex;
            background-color: #2A363B;
            color: #E84A5F;
        }
        
        .search-container > input {
            width: 23%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid lightgray;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
        }
        
        
        button {
            width: 26%;
            cursor: pointer;
            padding: 16px;
            margin-left: 2px;
            margin-right: 2px;
            background-color: #2A363B;
            color: white;
            border: 0;
            outline: 0;
            text-transform: uppercase;
        }
        button:hover {
            width: 26%;
            cursor: pointer;
            padding: 16px;
            margin-left: 2px;
            margin-right: 2px;
            background-color: #E84A5F;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <button id="allButtonElement" type="submit">Semua</button>
            <button id="categoryButtonElement" type="submit">Kategori</button>
            <input placeholder="Cari makanan disini" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Cari</button>
        </div>
        `;
        this.shadowDOM.querySelector("#categoryButtonElement").addEventListener("click", this._clickEvent3);
        this.shadowDOM.querySelector("#allButtonElement").addEventListener("click", this._clickEvent2);
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("nav-bar", NavBar);