import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrasi from './Registrasi';
import Beranda from './Beranda';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Registrasi/>}/>
      <Route path='/beranda' element={<Beranda/>}/>
    </Routes>
  )
}

export default App;
