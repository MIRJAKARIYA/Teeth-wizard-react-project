import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import CheckoutMore from './Pages/CheckoutMore/CheckoutMore';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkoutmore/:checkoutId' element={<CheckoutMore></CheckoutMore>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
