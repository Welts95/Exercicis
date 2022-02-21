import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import llista from "./pages/Llista";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
