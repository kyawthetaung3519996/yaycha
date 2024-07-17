import { useRef } from "react";

function Form({ add }) {
  const nameRef = useRef();
  const contentRef = useRef();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;

        add(content, name);

        e.currentTarget.reset();
      }}

      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: "#def"
      }}
    >
      <input type="text" ref={contentRef} placeholder="Content" style={{ padding: 5 }} />
      <input type="text" ref={nameRef} placeholder="Name" style={{ padding: 5 }} />
      <button type="submit" style={{
        padding: 8,
        background: "#0d6efd",
        color: "white",
        border: "0 none"
      }}>
        Post
      </button>
    </form>
  );
}

export default Form;