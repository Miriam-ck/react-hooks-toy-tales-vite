import ToyCard from "./ToyCard";

// Renders one ToyCard per toy
function ToyContainer({ toys, onLike, onDonate }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLike={onLike}
          onDonate={onDonate}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
