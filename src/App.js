import './App.css';
import Body from './components/Body/Body'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Errorpage from './UI/errorpage/Erropage'
import Login from './components/loginFolder/loginPage/Login';
import SignUP from './components/loginFolder/signUpPage/SignUP';
import ForgotPass from './components/loginFolder/forgotPassword/ForgotPass';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      {/* <Route path='/cart' element={<cart/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUP/>}/>
      <Route path='/forgotpassword' element={<ForgotPass/>}/>
      {/* <Route path='/singleproduct/:id' element={<singleproduct/>}/> */}
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
