import React, {useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';
import instance from '../api/axios';
import {
    BackButton,
    BannerButton,
    BannerContent,
    BannerDescription,
    BannerTitle,
    BannerWrapper,
    MoreInfoContent,
    PlayIcon
} from '../components/Banner/Banner.styled';
import requests from '../api/requests';
import {IMovies} from '../components/Row/Row';
import Youtube, {YouTubeProps} from 'react-youtube';

export type MovieIdType = {
    movieId: string | undefined
}

export const MovieDetails = () => {
    const movieTrailer = require( 'movie-trailer' )
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const {movieId} = useParams<MovieIdType>();

    const [movie, setMovie] = useState<IMovies>({
        name: '',
        backdrop_path: '',
        poster_path: '',
        id: '',
        title: '',
        original_name: '',
        overview: ''
    });

    useEffect(() => {
            async function fetchMovie() {
                const request = await instance.get(requests.fetchMovieDetails(movieId));
                setMovie(request.data)
                return request;
            }

            fetchMovie();
        }, [movieId]
    );

    const opts: YouTubeProps['opts'] = {
        height: '370',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

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
                    <BackButton onClick={goBack}>Back to</BackButton>
                    <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
                    <BannerButton more={false}
                                  onClick={() => handleTrailer(movie)}><PlayIcon/>Watch trailer</BannerButton>
                    <BannerDescription>{movie?.overview}</BannerDescription>
                    <Link to={`/movies/${movieId}/cast`}>
                        <BannerButton more={true}>Cast</BannerButton>
                    </Link>
                    <Link to={`/movies/${movieId}/reviews`}
                          state={{movieName: movie?.title}}>
                        <BannerButton more={true}>Reviews</BannerButton>
                    </Link>
                </BannerContent>
                    {trailerUrl && <Youtube style={{position: 'relative', top: '35px'}} videoId={trailerUrl} opts={opts}/>}
                <MoreInfoContent >
                    <Outlet/>
                </MoreInfoContent>
            </BannerWrapper>
    );
};
