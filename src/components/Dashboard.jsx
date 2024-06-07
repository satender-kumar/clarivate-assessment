import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../AppProvider";
import ItemCard from "./ItemCard";

export default function Dashboard() {
  const { favs } = useContext(FavContext);

  return (
    <div>
      <p>Dashboard Page</p>
      <button>
        <Link to="/list">Go to List Page</Link>
      </button>
      {favs.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
}
