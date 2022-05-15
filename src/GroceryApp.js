import AddItem from "./AddItem";
import Item from "./Item";
import FilterItems from "./FilterItems";

const GroceryApp = ({
  newItem,
  setNewItem,
  addNewItem,
  items,
  deleteItem,
  triggerCheck,
  searchItems,
  setSearchItems,
}) => {
  return (
    <div className="grocery__app">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        addNewItem={addNewItem}
      />
      <FilterItems searchItems={searchItems} setSearchItems={setSearchItems} />

      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          triggerCheck={triggerCheck}
        />
      ))}
    </div>
  );
};

export default GroceryApp;
