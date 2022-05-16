import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import GroceryApp from "./GroceryApp";

function App() {
const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  
  useEffect(()=>{
  	
  		const fetchItems = async () =>{
  			try {
  				const response= await fetch(API_URL);
  				const data = await response.json();
  				console.log(data);
  				setItems(data);
  			 }	catch (err) {
  			 	console.log(err.stack);
  			 }
  		}
  		fetchItems();
  },[]);

  const addNewItem = (addedItem) => {
    const randomID = Math.floor(Math.random() * 10000000);

    const newObject = {
      id: randomID,
      name: addedItem,
      bool: false,
    };
    setItems([...items, newObject]);
    setNewItem('')
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
