//testing https://www.freetogame.com/api-doc 

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './routes/Layout';
import { NotFound } from './routes/NotFound';
import { Home } from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Free-to-play-/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
