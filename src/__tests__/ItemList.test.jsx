import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavContext } from "../AppProvider";
import ItemList from "../components/ItemList";
import { itemList } from "./__mocks__/items";

test("renders List Page and check for list present", () => {
  const { getByText } = render(
    <BrowserRouter>
      <FavContext.Provider
        value={{
          favs: [],
          setFavs: jest.fn(),
          itemList,
        }}
      >
        <ItemList />
      </FavContext.Provider>
    </BrowserRouter>
  );
  const heading = getByText(
    /culpa odio esse rerum omnis laboriosam voluptate repudiandae/i
  );
  expect(heading).toBeInTheDocument();
});

test("should go to Dashboard page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <FavContext.Provider
        value={{
          favs: [],
          setFavs: jest.fn(),
          itemList: [
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952",
            },
          ],
        }}
      >
        <ItemList />
      </FavContext.Provider>
    </BrowserRouter>
  );
  const btn = getByText("Go Back");
  fireEvent.click(btn);
});
