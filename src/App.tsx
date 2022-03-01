import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import Home from './pages/home';
import Test from './pages/test';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/test" element={<Test/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
