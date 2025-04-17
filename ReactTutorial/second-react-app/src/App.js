import MyComp from "./components/mycomp";
import { Post } from "./components/Post";

function App(){
  return (<div>
    <h1>Hello kese ho aap log</h1>
    <p>this side from Rishav</p>
    <MyComp/>
    <Post title = "React Course" desc="This course is free"/>
  </div>

  )
}

export default App;
