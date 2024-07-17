import { useState } from "react"
import Item from "./Item"
import List from "./List"
import Form from "./Form";

function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello how are you?", name: "Kyaw Thet"},
    { id: 2, content: "Hi how are you?", name: "Ko Thet"},
    { id: 3, content: "Hey how are you?", name: "Kyaw Min"},
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, {id, content, name}])
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <Form add={add}/>
      <List>
        {data.map(item => {
          return <Item key={item.id} item={item} remove={remove} />
        })}
      </List>
    </div>
  );
}

export default App
