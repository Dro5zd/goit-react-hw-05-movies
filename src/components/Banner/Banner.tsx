import React, {useEffect, useState} from 'react';
import instance from '../../api/axios';
import requests from '../../api/requests';
import {BannerButton, BannerContent, BannerDescription, BannerTitle, BannerWrapper, PlayIcon} from './Banner.styled';
import {IMovies} from '../Row/Row';
import {Link} from 'react-router-dom';

const Banner = () => {
    const [movie, setMovie] = useState<IMovies>({
        name: '',
        backdrop_path: '',
        poster_path: '',
        id: '',
        title: '',
        original_name: '',
        overview: ''});
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
            <BannerContent>
                <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
                <BannerButton more={false}><PlayIcon/>Watch trailer</BannerButton>
                <Link to={`/movies/${movie?.id}`}>
                <BannerButton more={true}>More info</BannerButton>
                </Link>
                <BannerDescription>{movie?.overview}</BannerDescription>
            </BannerContent>

        </BannerWrapper>
    )
}
export default Banner