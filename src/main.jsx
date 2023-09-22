import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Menu from './Components/Menu/Menu.jsx';
import FoodRecipe from './Components/FoodRecipe/FoodRecipe.jsx';

const router = createBrowserRouter ([
  {
    path:'/',
  element: <Home></Home>,
  children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>

    },
    {
      path:'/menu',
      loader: ()=> Promise.all([
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then((response) => response.json()),
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b').then((response) => response.json())
      ]) ,
      element:<Menu></Menu>
    },
    {
      path: 'food/:idMeal',
      loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
      element: <FoodRecipe></FoodRecipe>


    }

  ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
