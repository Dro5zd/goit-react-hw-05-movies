import React from 'react';
import {SearchForm} from '../components/SearchForm/SearchForm';
import requests from '../api/requests';
import Row from '../components/Row/Row';

export const Movies = () => {

    const onSubmitHandler = () => {
        console.log('3')
    }
    return (
        <>
            <SearchForm onSubmitHandler={onSubmitHandler}/>
            <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} isLargeRow/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
        </>
    );
};
