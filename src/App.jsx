import { useContext, useState } from "react"
import Item from "./Item"
import List from "./List"
import Form from "./Form";
import { AppContent } from "./ThemedApp";

function App() {
  const { mode, setMode } = useContext(AppContent);

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
    <div style={{
      minHeight: 1500,
      paddingTop: 20,
      background: mode === "dark" ? "black" : "white",
      color: mode === "dark" ? "white" : "black"
    }}>
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        <h1>
          Yaycha
          <button
            onClick={() =>
              setMode(mode === "dark" ? "light" : "dark")
            }
            style={{
              marginLeft: 8,
              padding: "0 20px",
              height: 32,
              borderRadius: 32,
              border: "0 none",
              background: mode === "dark" ? "#333" : "#ddd",
              color: mode === "dark" ? "white" : "black"
            }}
          >
            { mode === "dark" ? "Light" : "Dark" }
          </button>
        </h1>
        <Form add={add}/>
        <List>
          {data.map(item => {
            return <Item key={item.id} item={item} remove={remove} />
          })}
        </List>
      </div>
    </div>
  );
}

export default App
