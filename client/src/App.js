import './App.css';
// import Header from './components/Header'
import Home from './components/Home';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import NavbarComponent from './components/NavbarComponent';
import About from './components/About';
import Edituser from './components/Edituser';

function App() {
  return (
    <>
      {/* <Header /> */}
<NavbarComponent/>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/About' element={ <About />} />
        <Route path='/Edituser' element={ <Edituser />} />
      </Routes>
      <div class="footer">
  <p><footer>&copy; Copyright 2023 </footer>
</p>
</div>
    </>
  );
}

export default App;
