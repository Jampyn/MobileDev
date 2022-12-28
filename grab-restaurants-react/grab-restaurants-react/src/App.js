import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import NavBar from"./components/NavBar";
function App() {
  return (
    <BrowserRouter>                
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
