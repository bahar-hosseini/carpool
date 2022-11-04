import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NeedRide from './pages/NeedRide';
import PostRide from './pages/PostRide';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/need-ride' element={<NeedRide />} />
      <Route path='/post-ride' element={<PostRide />} />
    </Routes>
  );
}

export default App;
