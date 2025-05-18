import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Order from './Pages/Orders';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Searchbar from './Components/Searchbar';
import Orders from './Pages/Orders';

function App() {

  return (
<div>
  <Navbar/>
  <Searchbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/collection' element={<Collection/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path="/product/:productId" element={<Product/>} />
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/place-order' element={<PlaceOrder/>}/>
<Route path='/orders' element={<Orders/>}/>


  
</Routes>
<Footer/>
</div>
  )
}

export default App;
