// Displays a single toy and calls the handlers passed down from App
function ToyCard({ toy, onLike, onDonate }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => onLike(toy)}>
        Like &lt;3
      </button>
      <button className="del-btn" onClick={() => onDonate(toy.id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
