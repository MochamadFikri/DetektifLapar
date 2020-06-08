class MealItem extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }  

    render() {
        if (this._meal.idCategory){
            this.shadowDOM.innerHTML = `
                <style>
                * {
                    margin : 0 ;
                    padding : 0 ;
                    box-sizing : border-box ;
                }
                
                :host {
                    display: block;
                    margin: 20px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                    width: 30%;
                    float: left;
                    background-color: #2A363B;
                    color: #E84A5F;
                }
                
                .meal-info {
                    padding: 24px;
                }
                
                h2 {
                    font-weight: lighter;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
                h2{
                    text-align: center;
                    font-family: 'Permanent Marker', cursive;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                button{
                    text-align: center;
                    margin-top: 20px;
                    padding: 10px;
                    cursor: pointer;
                }
                p{
                    color: white;
                    font-size: 12px;
                    margin-bottom: 10px;
                    margin-top: 10px;
                    text-align:justify;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
                @media screen and (max-width: 1200px){
                    :host {
                        display: block;
                        margin: 20px;
                        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                        width: 45%;
                    }
                }
                @media screen and (max-width: 900px){
                    :host {
                        display: block;
                        margin: 20px;
                        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                        width: 90%;
                    }
                }
                </style>
                <div class="meal-info">
                    <h2>${this._meal.strCategory}</h2>
                    <center>
                    <img src="${this._meal.strCategoryThumb}">
                    </center>
                    <p>${this._meal.strCategoryDescription}</p>
                </div>`;                
        }else{
            this.shadowDOM.innerHTML = `
                <style>
                * {
                    margin : 0 ;
                    padding : 0 ;
                    box-sizing : border-box ;
                }
                
                :host {
                    display: block;
                    margin: 20px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                    width: 30%;
                    float: left;
                    background-color: #2A363B;
                    color: #E84A5F;
                }
                
                .meal-info {
                    padding: 24px;
                }
                
                .meal-info > h2 {
                    font-weight: lighter;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
                h2{
                    text-align: center;
                    font-family: 'Permanent Marker', cursive;
                    margin-top: 20px;
                }
                button{
                    text-align: center;
                    margin-top: 20px;
                    padding: 10px;
                    cursor: pointer;
                }
                p{
                    color: white;
                    font-size: 12px;
                    margin-bottom: 10px;
                }
                
                .deskripsi{
                    color: white;
                    font-size: 12px;
                    margin-bottom: 10px;
                    margin-top: 10px;
                    text-align:justify;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
                @media screen and (max-width: 1200px){
                    :host {
                        display: block;
                        margin: 20px;
                        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                        width: 45%;
                    }
                }
                @media screen and (max-width: 900px){
                    :host {
                        display: block;
                        margin: 20px;
                        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
                        width: 90%;
                    }
                }
                </style>
                <div class="meal-info">
                    <h2>${this._meal.strMeal}</h2>
                    <center>
                    <p>( ${this._meal.strArea} ${this._meal.strCategory} )</p>
                    <img src="${this._meal.strMealThumb}">
                    <p class="deskripsi">( ${this._meal.strInstructions})</p>
                    </center>
                </div>`;
            }
    }
 }
  
 customElements.define("meal-item", MealItem);