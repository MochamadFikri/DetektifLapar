import '../component/meal-list.js';
import '../component/nav-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
    const searchElement = document.querySelector("nav-bar");
    const mealListElement = document.querySelector("meal-list");
 
    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const onButtonAllClicked = () => {
        DataSource.allMeals()
            .then(renderResult)
            .catch(fallbackResult)
    };

    const onButtonCategoryClicked = () => {
        DataSource.allCategory()
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
       mealListElement.meals = results;
    };
 
    const fallbackResult = message => {
       mealListElement.renderError(message);
    };
 
    searchElement.clickEvent = onButtonSearchClicked;
    searchElement.clickEvent2 = onButtonAllClicked;
    searchElement.clickEvent3 = onButtonCategoryClicked;
};
 
export default main;