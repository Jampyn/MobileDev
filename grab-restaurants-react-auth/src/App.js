import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import NavBar from"./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:restaurantId" element={<Update />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
