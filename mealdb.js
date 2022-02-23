const searchFood = () =>{
    const searchField = document.getElementById('search-field'); 
    const searchText = searchField.value; 
    
    searchField.value = ''; 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.meals))
}

const displaySearch = meals =>{
    const searchResult = document.getElementById('search-result'); 
    meals.forEach(meal => {
        console.log(meal); 
        const div = document.createElement('div'); 
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img width="25%" height="50%" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <h6>How to make this</h6>
              <p class="card-text">${meal.strInstructions}</p>
            </div>
          </div>
        `; 
        searchResult.appendChild(div); 
    });
}