function Item({item, remove}) {
  return (
    <li style={{
      borderBottom: "1px solid #ddd",
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      <b>{item.name}</b>
      <br />
      {item.content}
      <button onClick={() => remove(item.id)}>Delete</button>
    </li>
  );
}

export default Item;
