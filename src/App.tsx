import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Movies} from './pages/Movies';
import {NotFound} from './pages/NotFound';
import {Layout} from './components/Layout';
import {MovieDetails} from './pages/MovieDetails';
import {Cast} from './components/Cast/Cast';
import {Reviews} from './components/Reviews/Reviews';
import {Similar} from './components/Similar/Similar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
            <Route index element={<Similar/> }/>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
