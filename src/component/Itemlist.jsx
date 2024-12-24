import Item from "./Item";

export default function Itemlist({ food, Loading }) {
  return (
    <div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
