export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to your list!</em>
      </footer>
    )
  }
  
  let packedCount = 0;
  items.forEach((item) => {
    if (item.packed === true) {
      packedCount += 1
    }
  })
	const itemsLength = items.length
  const packedPercentage = Math.floor((packedCount / itemsLength) * 100)
  
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You've got everything ready to go!"
          : `You have ${items.length} ${items.length === 1 ? "item" : "items"} in your list and you have packed ${packedCount} (${packedPercentage}%) of those items.`}
      </em>
    </footer>
  );
}