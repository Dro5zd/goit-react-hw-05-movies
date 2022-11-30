import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Movies} from './pages/Movies';
import {NotFound} from './pages/NotFound';
import {Layout} from './components/Layout';
import {MovieDetails} from './components/MovieDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:moveId' element={<MovieDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
