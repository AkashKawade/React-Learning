// import logo from './logo.svg';
import "./App.css";

// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import UserGreeting from "./components/UserGreeting";
function App() {
  return (
    <>
      <div className="App">
        {/* <FunctionClick /> 
        <ClassClick /> */}
        <UserGreeting></UserGreeting>
        {/* <Counter /> */}
        {/* <Greet name = "Cris Evans" heroName='Captain America'>
        </Greet> */}
        {/* <Welcome name="cris" heroName="Thor"/> */}
        {/* <Hello />
        <Message />  */}
      </div>
      
    </>
  );
}

export default App;
