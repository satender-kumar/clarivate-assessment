import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./AppProvider";
import Dashboard from "./components/Dashboard";
import ItemList from "./components/ItemList";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<ItemList />} />
      </Routes>
    </AppProvider>
  );
}
