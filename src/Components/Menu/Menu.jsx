import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import FoodB from "../Food/FoodB";
import './Menu.css'

const Menu = () => {
    const foods = useLoaderData()
    const [foodsA , foodsB] = foods;
    const allFoodLength = (foodsA.meals.length+ foodsB.meals.length);
    console.log(foodsA);
    return (
        <div>
            <h1>We have {allFoodLength} foods</h1>
            <h3>A</h3>
            <hr />
            <div className="menu">
            {
                foodsA.meals.map((foodA,idx)=> <Food key={idx} foodA={foodA}></Food>)
            }

            </div>
            <h3>B</h3>
            <hr />
            <div className="menu">
            {
                foodsB.meals.map((foodB,idx)=> <FoodB key={idx} foodB={foodB}></FoodB>)
            }
            </div>
        </div>
    );
};

export default Menu;