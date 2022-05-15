const Item = ({ item, deleteItem, triggerCheck }) => {
  return (
    <div className="item">
      <input
        className="item__input"
        type="checkbox"
        checked={item.bool}
        onClick={() => triggerCheck(item.id)}
      />
      <p className={`item__name ${item.bool ? "item__name-checked" : null}`}>
        {item.name}
      </p>
      <button className="item__delete" onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
};
export default Item;
