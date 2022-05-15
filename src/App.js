import "./App.css";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import GroceryApp from "./GroceryApp";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Joel", bool: false },
    { id: 2, name: "Jaim", bool: true },
    { id: 3, name: "Geres", bool: false },
  ]);
  const [newItem, setNewItem] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  const addNewItem = (addedItem) => {
    const randomID = Math.floor(Math.random() * 10000000);

    const newObject = {
      id: randomID,
      name: addedItem,
      bool: false,
    };
    setItems([...items, newObject]);
  };
  const deleteItem = (id) => {
    const newObject = items.filter((item) => item.id !== id);

    setItems([...newObject]);
  };

  const triggerCheck = (id) => {
    const newObject = items.map((item) =>
      item.id === id ? { ...item, bool: !item.bool } : item
    );

    setItems([...newObject]);
  };

  return (
    <div className="App">
      <Header />
      <GroceryApp
        newItem={newItem}
        setNewItem={setNewItem}
        addNewItem={addNewItem}
        items={items.filter((items) =>
          items.name
            .toLocaleLowerCase()
            .includes(searchItems.toLocaleLowerCase())
        )}
        deleteItem={deleteItem}
        triggerCheck={triggerCheck}
        searchItems={searchItems}
        setSearchItems={setSearchItems}
      />
      <Footer items={items.length} />
    </div>
  );
}

export default App;
