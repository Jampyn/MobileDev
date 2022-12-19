import logo from './logo.svg';
import './App.css';
//import Post from './Post';      //import ไฟล์ 
//import { PostFunction } from "./PostFunction";
import StateInClass from './StateInClass';


function App() {
  return (                          //component ที่เราสร้าง
   /* <div className = "root">
    <div className="App">
      <h2>Class Component</h2>
       <Post content="this is a class component" name="Punyanuch Dissamrn"/> 
       <Post content="jam" name="jam"/>
       <hr/>
       <h2>Class Component</h2>
       <PostFunction 
        content="this is a class component"
        name="jam"
        />              
    </div>
      <Post />
    </div> */
    <div className="root">
      <div className="App">
        <h2>StateInClass Component</h2>
       <StateInClass name="Punyanuch Dissamrn" myId="1" />
    <hr/>
        <StateInClass name="jam" myId="2" />
      

      </div>
    </div>
  );
} 


export default App;
