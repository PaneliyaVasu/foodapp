import { useEffect, useState } from "react";
import Style from "./search.module.css";
export default function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch?";
  const API_KEY = "37726b9418b94214a5924fa1613f8b48";
  const [query, setquery] = useState("pizza");
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);

      const data = await res.json();
      setFoodData(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={Style.search}>
      <input
        className={Style.input}
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      ></input>
    </div>
  );
}
