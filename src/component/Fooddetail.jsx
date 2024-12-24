import { useEffect, useState } from "react";
import style from "./fooddetail.module.css";
import Itemlist from "./Itemlist";

export default function Fooddetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "37726b9418b94214a5924fa1613f8b48";
  const [food, setFood] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchfood();
  }, [foodId]);
  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{food.title}</h1>
        <img className={style.recipeImg} src={food.image} alt="" />
        <div className={style.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🧑‍🤝‍🧑Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲<span>{food.pricePerServing / 100} Per Serving</span>
        </div>
        <br />
        <h2>Ingredients</h2>
        <br />
        <Itemlist key={food.id} food={food} Loading={Loading} />
        <br />
        <h2>Instructions</h2>
        <div className={style.recipeInstructions}>
          <ol>
            {Loading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
