import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Computer from './pages/Computer';
import addComputer from './pages/addComputer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Computer/>}/>
        <Route path="/addComputer" element={<addComputer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
