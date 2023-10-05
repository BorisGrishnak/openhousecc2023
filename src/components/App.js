import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrasi from './Registrasi';
import Beranda from './Beranda';
import Expose from './Expose';
import Force from './Force';
import BTS from './BTS';
import UTC from './UTC';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes> 
      <Route path='/' element={<Registrasi/>}/>
      <Route path='/beranda' element={<Beranda/>}/>
      <Route path='/expose' element={<Expose/>}/>
      <Route path='/force' element={<Force/>}/>
      <Route path='/bts' element={<BTS/>}/>
      <Route path='/utc' element={<UTC/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App;
