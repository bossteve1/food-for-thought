import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Indian from './pages/Indian';
import Chinese from './pages/Chinese';
import American from './pages/American';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/recipes" element={<Recipes/>}exact/>
      <Route path="/indian" element={<Indian/>}exact />
      <Route path="/chinese" element={<Chinese/>}exact />
      <Route path="/american" element={<American/>}exact />

    </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
