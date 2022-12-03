import React, {useContext, useEffect, useState} from 'react';
import instance from '../../api/axios';
import requests from '../../api/requests';
import {BannerButton, BannerContent, BannerDescription, BannerTitle, BannerWrapper, PlayIcon} from './Banner.styled';
import {IMovies} from '../Row/Row';
import {Link} from 'react-router-dom';
import {IsLoadingContext} from '../../App';
import Youtube from 'react-youtube';
import {YouTubeProps} from 'react-youtube';

const Banner = () => {
    const movieTrailer = require( 'movie-trailer' )
    const [movie, setMovie] = useState<IMovies>({
        name: '',
        backdrop_path: '',
        poster_path: '',
        id: '',
        title: '',
        original_name: '',
        overview: ''
    });

    const {
        setIsLoading
    } = useContext(IsLoadingContext);

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    useEffect(() => {
            setIsLoading(true);
            async function fetchData() {
                try {
                    const response = await instance.get(requests.fetchTrendingMovies);
                    setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false);
                }
            }
            fetchData();
        }, []
    );

    const [trailerUrl, setTrailerUrl] = useState<string>('')
    const handleTrailer = (movie: IMovies) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || '')
                .then((url: string) => {
                        const urlParams = new URLSearchParams(new URL(url).search)
                    // @ts-ignore
                    setTrailerUrl(urlParams.get('v'))
                    })
                .catch((error: any)=> console.log(error))
        }
    }

    return (
        <BannerWrapper movie={movie}>
            <BannerContent>
                <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
                <BannerButton more={false}
                              onClick={() => handleTrailer(movie)}><PlayIcon/>Watch trailer</BannerButton>
                <Link to={`/movies/${movie?.id}`}>
                    <BannerButton more={true}>More info</BannerButton>
                </Link>
                <BannerDescription>{movie?.overview}</BannerDescription>
            </BannerContent>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </BannerWrapper>
    )
}
export default Banner