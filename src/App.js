
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CusromerRouters from './customer/Routers/CusromerRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CusromerRouters/>}></Route>
      </Routes>

      <div>
      
      </div>

    </div>
  );
}

export default App;
