export default function PackingList({items, deleteItemFromItems, updateItem, clearList}) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => {
					return <Item item={item} key={item.id} deleteItemFromItems={deleteItemFromItems} updateItem={updateItem}/>;
				})}
			</ul>
      <div className="actions">
        <button onClick={clearList}>Clear list</button>
      </div>
		</div>
	);
}

function Item({ item, deleteItemFromItems, updateItem }) {
	return (
		<li>
      <input type="checkbox" onChange={() => updateItem(item)}></input>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => deleteItemFromItems(item)}>✖</button>
		</li>
	);
}