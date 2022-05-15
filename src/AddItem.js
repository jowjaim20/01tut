const AddItem = ({ newItem, setNewItem, addNewItem }) => {
  return (
    <form className="additem">
      <input
        className="additem__input"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="add item"
      />
      <button
        className="additem__button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addNewItem(newItem);
        }}
      >
        +
      </button>
    </form>
  );
};

export default AddItem;
