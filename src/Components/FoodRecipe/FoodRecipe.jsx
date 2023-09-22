import { Link, useLoaderData } from "react-router-dom";

const FoodRecipe = () => {
  const food = useLoaderData();
  const food2 = food.meals[0];
  const {
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strYoutube,
    strInstructions
  } = food2;
  console.log(food2);
  return (
    <div>
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} />
      <h3>Ingredients:</h3>
      <ol>
        <li>{strIngredient1}<span > {strMeasure1}</span></li>
        <li>{strIngredient2}<span > {strMeasure2}</span></li>
        <li>{strIngredient3}<span > {strMeasure3}</span></li>
        <li>{strIngredient4}<span > {strMeasure4}</span></li>
        <li>{strIngredient5}<span > {strMeasure5}</span></li>
        <li>{strIngredient6}<span > {strMeasure6}</span></li>
        <li>{strIngredient7}<span > {strMeasure7}</span></li>
        <li>{strIngredient8}<span > {strMeasure8}</span></li>
        <li>{strIngredient9}<span > {strMeasure9}</span></li>
        <li>{strIngredient10}<span > {strMeasure10}</span></li>
        <li>{strIngredient11}<span > {strMeasure11}</span></li>
        <li>{strIngredient12}<span > {strMeasure12}</span></li>
        <li>{strIngredient13}<span > {strMeasure13}</span></li>
        <li>{strIngredient14}<span > {strMeasure14}</span></li>
      </ol>
      <p>

      {strInstructions}
      </p>

      <video src={strYoutube} controls>
      {strYoutube}
      </video>
      <div>

      <Link to={strYoutube}><button>Play on Youtube</button></Link>
      </div>
      <br />

    </div>
  );
};

export default FoodRecipe;
