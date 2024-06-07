import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders App", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = getByText(/Dashboard/i);
  expect(heading).toBeInTheDocument();
});

test("should go to item list page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const btn = getByText("Go to List Page");
  fireEvent.click(btn);
  const getListText = getByText("List Page");
  expect(getListText).toBeInTheDocument();
});
