import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import GroceryApp from "./GroceryApp";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (!response.ok) {
          throw Error("Did not receive expected data");
        }
        console.log(data);
        setItems(data);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(function () {
      fetchItems();
    }, 3000);
  }, []);

  const addNewItem = async (addedItem) => {
    const randomID = Math.floor(Math.random() * 10000000);
    const randomID2 = new Date();
    const id = `${randomID}${randomID2.getTime()}`;

    const newObject = {
      id: +id,
      name: addedItem,
      bool: false,
    };
    setItems([...items, newObject]);
    setNewItem("");

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObject),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
  };
  const deleteItem = async (id) => {
    const newObject = items.filter((item) => item.id !== id);

    setItems([...newObject]);

    const postOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await apiRequest(`${API_URL}/${id}`, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const triggerCheck = async (id) => {
    const newObject = items.map((item) =>
      item.id === id ? { ...item, bool: !item.bool } : item
    );

    setItems([...newObject]);
    const forPatch = newObject.filter((item) => item.id === id);
    const postOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bool: forPatch[0].bool }),
    };
    const result = await apiRequest(`${API_URL}/${id}`, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  return (
    <div className="App">
      <Header />
      {isLoading && <p>Loading...</p>}
      {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && (
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
      )}
      <Footer items={items.length} />
    </div>
  );
}

export default App;
