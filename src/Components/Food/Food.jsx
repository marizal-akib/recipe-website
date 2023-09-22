/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Food = ({ foodA }) => {
  const { idMeal,strMealThumb, strMeal } = foodA;

  const foodStyle ={
    border: '2px solid indigo',
    padding:'5px',
    borderRadius: '15px'
}
const imgStyle = {
    width: '250px',
  };

  const textStyle ={
    textDecoration: 'underline',
  }

  return (
    <div style={foodStyle}>
            <img src={strMealThumb} alt="strMeal" style={imgStyle} />
            <Link to={`/food/${idMeal}`}><h3 style={textStyle}>{strMeal}</h3></Link>

            
        </div>
  );
};

export default Food;
