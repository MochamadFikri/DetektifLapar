class DataSource {
   static searchMeal(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
   }
   static allMeals() {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
                return Promise.resolve(responseJson.meals);
        })
    }
    static allCategory() {
         return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            return Promise.resolve(responseJson.categories);
         })
     }
     static detailCategory(keyword) {
          return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
          .then(response => {
              return response.json();
          })
          .then(responseJson => {
             return Promise.resolve(responseJson.meals);
          })
      }
}
 
export default DataSource;