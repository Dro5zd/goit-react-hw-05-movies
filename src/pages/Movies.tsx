import React from 'react';
import {SearchForm} from '../components/SearchForm/SearchForm';
import requests from '../api/requests';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';
import {useSearchParams} from 'react-router-dom';

export const Movies = () => {
    const [searchParams] = useSearchParams('');
    const search = searchParams.get('search') ?? ''

    return (
        <>
            <Banner/>
            <SearchForm/>
            {search ?
                <Row title="Search results" fetchUrl={requests.searchMovies(search || '')} isLargeRow/> :
                <>
                    <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} isLargeRow/>
                    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
                    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
                    <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
                    <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
                </>

            }
        </>
    );
};
