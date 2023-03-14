//testing https://www.freetogame.com/api-doc 

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Routes/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
