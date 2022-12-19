//import logo from './logo.svg';
import Post from "./Post"
import './App.css';
import Comment from "./Comment"
import Card from "./Card"
import Navbar from "./Navbar"

function App() {
  return (
  <div>
    <Navbar></Navbar>
    <Post userId="Dek_SE" message="Yeah, I got a grade A in Mobile Programming.">
        <Comment userId="punyanuch" message="Wow, it's wonderful"></Comment>
        <Comment userId="jam" message="Congratulation !"></Comment>
    </Post>
    <br></br>
    <Card></Card>
  </div>
  );
}

export default App;
