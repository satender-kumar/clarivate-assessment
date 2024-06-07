import { createContext, useCallback, useEffect, useState } from "react";

export const FavContext = createContext();

function uniqueBy(array, key) {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    } else {
      seen.add(value);
      return true;
    }
  });
}

export default function AppProvider({ children }) {
  const [itemList, setItemList] = useState([]);
  const [favs, setFavs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`
      );
      const data = await response.json();
      setItemList((prev) => uniqueBy([...prev, ...data], "id"));
    } catch (error) {
      console.log("error => ", error);
    } finally {
      setIsLoading(false);
    }

    setPage((prev) => prev + 1);
  }, [page, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10"
        );
        const data = await response.json();
        setItemList(data);
      } catch (error) {
        console.log("error => ", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <FavContext.Provider value={{ favs, setFavs, itemList }}>
      {children}
    </FavContext.Provider>
  );
}
