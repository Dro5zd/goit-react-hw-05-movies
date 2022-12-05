import React, {createContext, lazy, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Loader} from './components/Loader/Loader';

import {Layout} from './components/Layout/Layout';
const Home = lazy(() => import("../src/pages/Home"));
const Movies = lazy(() => import("../src/pages/Movies"));
const MovieDetails = lazy(() => import("../src/pages/MovieDetails"));
const Cast = lazy(() => import("../src/components/Cast/Cast"));
const Reviews = lazy(() => import("../src/components/Reviews/Reviews"));
const NotFound = lazy(() => import("../src/pages/NotFound/NotFound"));


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
                            <Route path="cast" element={<Cast/>}/>
                            <Route path="reviews" element={<Reviews/>}/>
                        </Route>
                        <Route path="/*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </IsLoadingContext.Provider>
        </>
    );
}

export default App;
