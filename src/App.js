import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Reservation from './Components/Reservation';
import Junkfood from './Components/Junkfood';
import Pastrys from './Components/Pastrys';
import Beverages from './Components/Beverages';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/reservation' element={<Reservation />}></Route>
        <Route path='/junkfoods' element={<Junkfood />}></Route>
        <Route path='/Beverages' element={<Beverages />}></Route>
        <Route path='/pastrys' element={<Pastrys />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
