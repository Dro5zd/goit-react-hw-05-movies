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

export type MovieIdType = {
    movieId: string | undefined
}

export const MovieDetails = () => {

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
    return (
        <div>
            <BannerWrapper movie={movie}>
                <BannerContent>
                    <BackButton onClick={goBack}>Back to</BackButton>
                    <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
                    <BannerButton more={false}><PlayIcon/>Watch trailer</BannerButton>
                    <BannerDescription>{movie?.overview}</BannerDescription>
                    <Link to={`/movies/${movieId}/cast`}>
                        <BannerButton more={true}>Cast</BannerButton>
                    </Link>
                    <Link to={`/movies/${movieId}/reviews`}
                          state={{movieName: movie?.title}}>
                        <BannerButton more={true}>Reviews</BannerButton>
                    </Link>
                </BannerContent>
                <MoreInfoContent>
                    <Outlet/>
                </MoreInfoContent>
            </BannerWrapper>
        </div>
    );
};
