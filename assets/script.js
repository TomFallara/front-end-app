

var ingredientSearchItem = document.querySelector("#ingredient");
var recipeSearchItem = document.querySelector("#recipe");

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");




var ingredientsOfRecepieSearchItem = '';
var openNav;
var closeNav;




function displayIngredients(){
  // var ingredientArea = document.getElementById('fullRecipe');
  // recepieName = document.createElement('h2');
  // recepieName.textContent = data.hits[i].recipe.label;
  // recepieIngredientList = document.createElement('ul');
  // var li = document.createElement('li');
  // li.textContent = data.hits[i].recipe.ingredientLines;
  console.log('reeeeeeeeeeeeeeeeeeeeeeeeee') //literally dying

}

//grabs recepies based on single item input
function getRecipesByIngredient() {

  console.log("onion");

  var requestUrl = 'https://russelldev-cors-anywhere.herokuapp.com/https://api.edamam.com/search?q='+ingredientSearchItem.value+'&app_id=b958af72&app_key=46b1301f63cc0535dde1e7187e2ff26b';

  console.log(requestUrl)


fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //targeting the list by id. in this case the placeholder is, recepieList1
        let list = document.getElementById("recipeList1");
        var recipeLog = document.getElementById('recipeInformation');       
        console.log(data.q);

      //makes list of recipes that use the item in the search function and consloe logs for good measure
      for(i=0; i < data.hits.length; i++) {
      console.log(data.hits[i].recipe.label);

      
      var li = document.createElement('li');
      li.textContent = data.hits[i].recipe.label;
      recipeName = document.createElement('h2');
      recipeName.textContent = data.hits[i].recipe.label;
      list.appendChild(li);
      var recipeIngredientList = document.createElement('ul'); 
         // adding ingredients to the second list
          for(y=0; y <data.hits[i].recipe.ingredients.length; y++){
            var li2 = document.createElement('li');
            console.log(data.hits[i].recipe.ingredients[y].text)
            li2.textContent = data.hits[i].recipe.ingredients[y].text;
            recipeIngredientList.appendChild(li2)
      }
      recipeName.appendChild(recipeIngredientList)
      recipeLog.appendChild(recipeName)
      
      list.querySelectorAll('li').forEach(item =>{
      item.addEventListener('click', displayIngredients);
    });
      }
    });
  };
  
  
  function getRecipesByName(){
    
    var requestUrl = 'https://russelldev-cors-anywhere.herokuapp.com/https://api.edamam.com/search?q='+recipeSearchItem.value+'&app_id=b958af72&app_key=46b1301f63cc0535dde1e7187e2ff26b';
    
fetch(requestUrl)
.then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //targeting the list by id. in this case the placeholder is, recepieList2     
      let list = document.getElementById("recipeList2");
      var recipeLog = document.getElementById('recipeInformation');
      
      console.log(data);
      
      //makes list of recipes that use the item in the search function and consloe logs for good measure
      for(i=0; i < data.hits.length; i++) {
        
        var li = document.createElement('li');
        li.textContent = data.hits[i].recipe.label;
        recipeName = document.createElement('h2');
        recipeName.textContent = data.hits[i].recipe.label;
        list.appendChild(li);
        var recipeIngredientList = document.createElement('ul'); 
        
          for(y=0; y <data.hits[i].recipe.ingredients.length; y++){
            var li2 = document.createElement('li');
            console.log(data.hits[i].recipe.ingredients[y].text)
            li2.textContent = data.hits[i].recipe.ingredients[y].text;
            recipeIngredientList.appendChild(li2)
          }
          recipeName.appendChild(recipeIngredientList)
          recipeLog.appendChild(recipeName)
      
          list.querySelectorAll('li').forEach(item =>{
      item.addEventListener('click', displayIngredients);
    });

      };
      
    });
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// function getIngredients(){
  
  //     var requestUrl = 'https://api.edamam.com/search?q='+recipeSearchItem+'&app_id=b958af72&app_key=46b1301f63cc0535dde1e7187e2ff26b';
  
  // fetch(requestUrl)
  //     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {      
  //       //targeting the list by id. in this case the placeholder is, ingredientList
  //       let list = document.getElementById("ingredientList");
  
  //         console.log(data);
  
  //       //makes list of recipes that use the item in the search function and consloe logs for good measure
  //       for(i=0; i < data.hits.length; i++) {
    
    //       var li = document.createElement('li');
    //       li.textContent = data.hits[i].recipe.label;
    //       list.appendChild(li)
    //       }
    //     });
// }

        
       
button1.addEventListener("click", getRecipesByName);
button2.addEventListener("click", getRecipesByIngredient);
