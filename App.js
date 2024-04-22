import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Signup' element={<Signup/>} />
        </Routes>
     
    </div>
  );
}

export default App;
