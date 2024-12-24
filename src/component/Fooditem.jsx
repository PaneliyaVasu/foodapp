import style from "./fooditem.module.css";
export default function Fooditem({ food, setFoodId }) {
  return (
    <div className={style.container}>
      <img className={style.image} src={food.image}></img>
      <div className={style.itemContent}>
        <p className={style.itemName}> {food.title}</p>
      </div>
      <div className={style.btnc}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={style.btn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
