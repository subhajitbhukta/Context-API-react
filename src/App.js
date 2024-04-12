import './App.css';
import UseContextProvider from './Context/UseContextProvider';
import Login from './Components/Login';
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <UseContextProvider>
        <h2>HII React</h2>
       <Login/>
       <Profile/>
      </UseContextProvider>
    </>
  );
}

export default App;
