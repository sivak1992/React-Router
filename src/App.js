import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Component/Home';
import { About } from './Component/About';
import {Navbar} from './Component/Navbar'
import { OrderSummary } from './Component/OrderSummary';
import { NoMatch } from './Component/NoMatch';


function App() {
  return (
    <>
      <Navbar />
         <Routes>
           <Route path="/" element={<Home/> } />
           <Route path="about" element={<About/>} />
           <Route path="order-summary" element={<OrderSummary/>}></Route>
           <Route path='*' element={<NoMatch />}></Route>
         </Routes>
    </>
  );
}

export default App;
