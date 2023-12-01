import { useState } from "react";

export default function Form({addItemToItems}) {
	const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		
    if (!description) {
      return;
    }

    const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    const newItem = {
      id: Date.now(),
      description: capitalizedDescription,
      quantity,
      packed: false
    };
    
    addItemToItems(newItem)

    setDescription("")
    setQuantity(1)
	}

  const options = [1,2,3,4,5,6,7,8,9,10]

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip? </h3>
			<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {options.map((option) => {
          return <option value={option}>{option}</option>
        })}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></input>
			<button>Add</button>
		</form>
	);
}