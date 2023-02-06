import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, VideoDetail, ChannalDetail, SearchFeed } from "./pages";
import {NavBar} from "./components";

const App = () => {
  return(
  <BrowserRouter>
  <Box sx={{ backgroundColor : "#000"}}>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/video/:videoId" element={<VideoDetail/>} />
      <Route path="/channal/ :channalId " element={<ChannalDetail/>} />
      <Route path="/search/:searchTerm" element={<SearchFeed/>} />
    
    </Routes>
  </Box>
  </BrowserRouter>
  );
};
export default App;

