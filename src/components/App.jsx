import { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const URL = "http://localhost:3001/toys";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newToy, likes: 0 }),
    })
      .then((r) => r.json())
      .then((createdToy) => setToys((toys) => [...toys, createdToy]));
  }

  function handleLike(toy) {
    fetch(`${URL}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((r) => r.json())
      .then((updatedToy) =>
        setToys((toys) =>
          toys.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        )
      );
  }

  function handleDonate(id) {
    fetch(`${URL}/${id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setToys((toys) => toys.filter((toy) => toy.id !== id));
      }
    });
  }

  return (
    <>
      <Header />
      <div className="buttonContainer">
        <button type="button" onClick={() => setShowForm((show) => !show)}>
          Add a Toy
        </button>
      </div>
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDonate={handleDonate}
      />
    </>
  );
}

export default App;