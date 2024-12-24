import Fooditem from "./Fooditem";

export default function Foodlist({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
}
