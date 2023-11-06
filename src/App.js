import './App.css';
import Body from './components/Body/Body'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Errorpage from './UI/errorpage/Erropage'
import Login from './components/loginFolder/loginPage/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      {/* <Route path='/cart' element={<cart/>}/> */}
      <Route path='/Login' element={<Login/>}/>
      {/* <Route path='/singleproduct/:id' element={<singleproduct/>}/> */}
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
