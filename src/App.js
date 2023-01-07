import logo from './logo.svg';
import './App.css';
import {Outlet, Route, Routes} from 'react-router-dom'
import Nav from './components/nav';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>

    </div>
  );
}

export default App;
