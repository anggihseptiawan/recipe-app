const main = () => {
	const searchElement = document.querySelector("search-bar");
	const el = document.getElementById("show_recipe");

	const onButtonSearchClicked = () => {
		fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement.value}`
		)
			.then((res) => res.json())
			.then(({ meals }) => {
				if (meals) {
					el.innerHTML = `
                        <h4 class="title">${meals[0].strMeal}</h4>
                        <img src=${meals[0].strMealThumb} alt=${meals[0].strMeal} />
                        <p><strong class="section">Food Area</strong></p>
                        <div class="sub">
                            <p>${meals[0].strArea}</p>
                        </div>
                        <p><strong class="section">Ingredients</strong></p>
                        <div class="sub">
                            <p>${meals[0].strIngredient1}</p>
                            <p>${meals[0].strIngredient2}</p>
                            <p>${meals[0].strIngredient3}</p>
                            <p>${meals[0].strIngredient4}</p>
                            <p>${meals[0].strIngredient5}</p>
                            <p>${meals[0].strIngredient6}</p>
                            <p>${meals[0].strIngredient7}</p>
                            <p>${meals[0].strIngredient8}</p>
                        </div>
                        <p><strong class="section">How to cook</strong></p>
                        <div class="sub">
                            <p>${meals[0].strInstructions}</p>
                        </div>
                    `;
				} else {
					el.innerHTML = `<p style="text-align: center;">i'm sorry, recipe not found, let's try again</p>`;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
