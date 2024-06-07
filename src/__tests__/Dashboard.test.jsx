import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavContext } from "../AppProvider";
import Dashboard from "../components/Dashboard";
import { itemList } from "./__mocks__/items";

test("renders Dashboard Page and check for favs present", () => {
  const { getByText } = render(
    <BrowserRouter>
      <FavContext.Provider
        value={{
          favs: itemList,
          setFavs: jest.fn(),
          itemList: [],
        }}
      >
        <Dashboard />
      </FavContext.Provider>
    </BrowserRouter>
  );
  const heading = getByText(
    /accusamus beatae ad facilis cum similique qui sunt/i
  );
  expect(heading).toBeInTheDocument();
});
