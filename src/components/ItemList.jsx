import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../AppProvider";
import ItemCard from "./ItemCard";

export default function ItemList() {
  const { setFavs, itemList } = useContext(FavContext);

  const handleFavs = (fav) => {
    setFavs((prev) => {
      const isFav = prev.find((item) => item.id === fav.id);
      return isFav ? prev.filter((item) => item.id !== fav.id) : [...prev, fav];
    });
  };

  return (
    <div>
      <p>List Page</p>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      {itemList.map((item) => {
        return <ItemCard key={item.id} item={item} onHandleFavs={handleFavs} />;
      })}
    </div>
  );
}
