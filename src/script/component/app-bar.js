class AppBar  extends HTMLElement{
    
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
        * {
            margin : 0 ;
            padding : 0 ;
            box-sizing : border-box ;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #2A363B;
            color: #E84A5F;
            
        }
        h2 {
            padding: 5px;
            text-align: center;
            font-family: 'Permanent Marker', cursive;
            font-size: 40px;
        }
        p {
            padding-bottom: 5px;
            text-align: center;
            font-size: 20px;
        }
        </style>
        <h2>Detektif Lapar</h2>
        <p>( Meal Finder )</p>`;
    }

}

customElements.define("app-bar", AppBar);