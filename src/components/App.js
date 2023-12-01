import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {

  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(item) {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }

  function handleUpdateItem(item) {
    setItems((items) => items.map((i) => {
      return i.id === item.id ? {...i, packed: !i.packed} : i
    }))
  }

  function handleClearList() {
    setItems((items) => [])
  }

	return (
		<div className="app">
			<Logo />
			<Form addItemToItems={handleAddItem}/>
			<PackingList items={items} deleteItemFromItems={handleDeleteItem} updateItem={handleUpdateItem} clearList={handleClearList}/>
			<Stats items={items}/>
		</div>
	);
}

