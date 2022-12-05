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
import Youtube, {YouTubeProps} from 'react-youtube';
import {useHandlerTrailer} from '../hooks/use-handler-trailer.hook';

export type MovieIdType = {
    movieId: string | undefined
}

const MovieDetails = () => {
    const { trailerUrl, handleTrailer} = useHandlerTrailer()
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
                    {trailerUrl && <Youtube style={{position: 'relative', top: '40px'}} videoId={trailerUrl} opts={opts}/>}
                <MoreInfoContent >
                    <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet/>
                    </Suspense>
                </MoreInfoContent>
                    <Row title="Similar movies" fetchUrl={requests.fetchSimilarMovies(movieId)}
                         isLargeRow={true} top='0'/>
            </BannerWrapper>
    );
};

export default MovieDetails
