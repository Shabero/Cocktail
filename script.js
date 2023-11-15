const row = document.querySelector('.row');
const apiUrl = 'https://www.thecocktaildb.com/api/json/v2/1/popular.php'

const handleGetCocktail = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(cocktail => {
                row.innerHTML += `
                 <div class="col-4">
                    <div class="card">
                        <img class="card-img" src="${cocktail.strDrinkThumb}" alt="">
                        <div class="card-body">
                            <h3 class="card-title">${cocktail.strDrink}</h3>
                            <p class="card-text">${cocktail.strAlcoholic}</p>
                        </div>
                    </div>  
                </div>`
            })
        })
}
handleGetCocktail()
