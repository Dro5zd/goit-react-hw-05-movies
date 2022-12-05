import React, {Suspense, useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import instance from '../api/axios';
import {
    BannerButton,
    BannerContent,
    BannerDescription, BannerLink,
    BannerTitle,
    BannerWrapper,
    MoreInfoContent,
    PlayIcon
} from '../components/Banner/Banner.styled';
import requests from '../api/requests';
import Row, {IMovies} from '../components/Row/Row';
import {useHandlerTrailer} from '../hooks/use-handler-trailer.hook';
import {Modal} from '../components/Modal/Modal';

export type MovieIdType = {
    movieId: string | undefined
}

const MovieDetails = () => {
    const { trailerUrl, handleTrailer, setTrailerUrl} = useHandlerTrailer()
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
            <BannerWrapper movie={movie}>
                <BannerContent>
                    <BannerButton more={true} onClick={goBack}>Back to</BannerButton>
                    <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
                    <BannerButton more={false}
                                  onClick={() => handleTrailer(movie)}><PlayIcon/>Watch trailer</BannerButton>
                    <BannerDescription>{movie?.overview}</BannerDescription>
                    <BannerLink to='cast' replace>
                        Cast
                    </BannerLink>
                    <BannerLink to='reviews' state={{movieName: movie?.title}} replace>
                        Reviews
                    </BannerLink>
                </BannerContent>
                <MoreInfoContent >
                    <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet/>
                    </Suspense>
                </MoreInfoContent>
                    <Row title="Similar movies" fetchUrl={requests.fetchSimilarMovies(movieId)}
                         isLargeRow={true} top='0'/>
                {trailerUrl && <Modal
                  setTrailerUrl={setTrailerUrl}
                  trailerUrl={trailerUrl}
                />}
            </BannerWrapper>
    );
};

export default MovieDetails
