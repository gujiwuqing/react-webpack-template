import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Test from './pages/test';
import BaseHeader from "@components/BaseHeader";

const App = () => {
  return (
    <BrowserRouter>
      <BaseHeader/>

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
