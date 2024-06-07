export default function ItemCard({ item, onHandleFavs }) {
  return (
    <div className="card-container">
      <img src={item.thumbnailUrl} alt={item.title} />
      <div className="card-title">
        <p>{item.id}</p>
        <p>{item.title}</p>
      </div>
      {!!onHandleFavs && (
        <button onClick={() => onHandleFavs(item)}>Add to Favorites</button>
      )}
      <hr />
    </div>
  );
}
