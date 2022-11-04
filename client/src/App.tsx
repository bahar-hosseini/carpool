import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NeedRide from './pages/NeedRide';
import PostRide from './pages/PostRide';
import Signin from './components/Signin';
import SigninProvider from './providers/SigninProvider'


function App() {
  return (
    <div>
      <SigninProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/need-ride' element={<NeedRide />} />
          <Route path='/post-ride' element={<PostRide />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </SigninProvider>
    </div>
  );
}

export default App;
