import React, {createContext, useState} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Movies} from './pages/Movies';
import {NotFound} from './pages/NotFound';
import {Layout} from './components/Layout/Layout';
import {MovieDetails} from './pages/MovieDetails';
import {Cast} from './components/Cast/Cast';
import {Reviews} from './components/Reviews/Reviews';
import {Similar} from './components/Similar/Similar';
import {Loader} from './components/Loader/Loader';

export interface IIsLoadingContext {
    setIsLoading: (c: boolean) => void
}

export const IsLoadingContext = createContext<IIsLoadingContext>({
    setIsLoading: () => {
    }
});

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <IsLoadingContext.Provider value={{setIsLoading}}>
                <Loader isLoading={isLoading}/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/movies" element={<Movies/>}/>
                        <Route path="/movies/:movieId" element={<MovieDetails/>}>
                            <Route index element={<Similar/>}/>
                            <Route path="cast" element={<Cast/>}/>
                            <Route path="reviews" element={<Reviews/>}/>
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </IsLoadingContext.Provider>
        </>
    );
}

export default App;
