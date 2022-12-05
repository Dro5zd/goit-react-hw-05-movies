import React from 'react';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';
import requests from '../api/requests';

const Home = () => {
    return (
        <>
            <Banner/>
            <Row title="GOITFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal}
                 isLargeRow={true}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
        </>
    );
};

export default Home