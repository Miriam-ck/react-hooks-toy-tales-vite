import { useState } from "react";

// Controlled form: keeps the inputs in local state and sends them to App on submit
function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    onAddToy({ name, image });
    setName("");
    setImage("");
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a toy's name..."
        className="input-text"
      />
      <br />
      <input
        type="text"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter a toy's image URL..."
        className="input-text"
      />
      <br />
      <input
        type="submit"
        name="submit"
        value="Create New Toy"
        className="submit"
      />
    </form>
  );
}

export default ToyForm;