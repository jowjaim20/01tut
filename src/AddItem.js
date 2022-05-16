const AddItem = ({ newItem, setNewItem, addNewItem }) => {
  return (
    <form className="additem" onSubmit={(e) => {
          e.preventDefault();
          addNewItem(newItem);
        }}>
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
        
      >
        +
      </button>
    </form>
  );
};

export default AddItem;
