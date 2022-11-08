

var searchItem = 'onion'

//grabs recepies based on single item input
function getRecipes(){

    var requestUrl = 'https://api.edamam.com/search?q='+searchItem+'&app_id=b958af72&app_key=46b1301f63cc0535dde1e7187e2ff26b';

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
        let list = document.getElementById("recipeList");

        console.log(data.q);

      //makes list of recipes that use the item in the search function and consloe logs for good measure
      for(i=0; i < data.hits.length; i++) {
      console.log(data.hits[i].recipe.label);
      var li = document.createElement('li');
      li.textContent = data.hits[i].recipe.label;
      list.appendChild(li)
      }
    });
}

getRecipes()