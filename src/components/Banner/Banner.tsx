import React, {useEffect, useState} from 'react';
import instance from '../../api/axios';
import requests from '../../api/requests';
import {BannerFadeBottom, BannerTitle, BannerWrapper} from './Banner.styled';
import {IMovies} from '../Row/Row';

function Banner() {
    const [movie, setMovie] = useState<IMovies>({name: '', backdrop_path: '', poster_path: '', id: '', title: '', original_name: ''});
    useEffect(() => {
            async function fetchData() {
                const request = await instance.get(requests.fetchNetflixOriginal);
                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
                return request;
            }
            fetchData();
        }, []
    );
    return (
        <BannerWrapper movie={movie}>
          <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
            <BannerFadeBottom/>
        </BannerWrapper>
    )
}
export default Banner