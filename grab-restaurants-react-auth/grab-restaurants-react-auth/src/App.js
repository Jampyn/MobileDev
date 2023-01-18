import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurants from "./pages/Restaurants";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import AuthService from "./services/auth.service";

function App() {
  const currentUser = AuthService.getCurrentUser();
  const logout = () =>{
    AuthService.logout();
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} logout={logout}/>
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:restaurantId" element={<Update />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
