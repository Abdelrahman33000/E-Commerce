import logo from './logo.svg';
import './App.css';
import {Routes , Route  ,useLocation} from 'react-router-dom'
import { Cart, Checkout, Home, Install, Products, SignUp } from './pages';
import { Footer, Navbar } from './component';
import Login from './pages/Login/Login';

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSignUpPage = location.pathname === '/signup';

  return (
<div style={{overflowX:"hidden"}}>
{/* <Navbar /> */}

{!isLoginPage  && <Navbar /> && !isSignUpPage && <Navbar />}
<Routes>
  <Route path='/' element={<Login />}  />
  <Route path='/signup' element={<SignUp />}  />
  
  <Route path='/home' element={<Home />}  />
  <Route path='/products' element={<Products />}  />
  <Route path='/cart' element={<Cart />}  />
  <Route path='/checkout' element={<Checkout />} />
  <Route path='/install' element={<Install />} />

  
</Routes>
<Footer />
</div>
  );
}

export default App;
