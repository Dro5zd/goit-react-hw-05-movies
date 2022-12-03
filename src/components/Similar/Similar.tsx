import React, {useContext, useEffect, useState} from 'react';
import requests from '../../api/requests';
import {Link, useLocation, useParams} from 'react-router-dom';
import {MovieIdType} from '../../pages/MovieDetails';
import instance from '../../api/axios';
import {RowPoster, RowPosters, RowTitle, RowWrapper} from '../Row/Row.styled';
import {IMovies} from '../Row/Row';
import {IsLoadingContext} from '../../App';

const base_url = 'https://image.tmdb.org/t/p/original'
export const Similar = () => {

    const {movieId} = useParams<MovieIdType>();

    const [movies, setMovies] = useState<IMovies[]>([]);
    const location = useLocation();

    const {
        setIsLoading
    } = useContext(IsLoadingContext);

    useEffect(() => {
            setIsLoading(true);

            async function fetchMovieCredits() {
                try {
                    const res = await instance.get(requests.fetchSimilarMovies(movieId));
                    setMovies(res.data.results)
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false);
                }
            }

            fetchMovieCredits();
        }, [movieId]
    );

    return (
        <RowWrapper isLarge={true} cast={true}>
            <RowTitle>Similar movies</RowTitle>
            <RowPosters>
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} state={{...location.state, fromRow: location}}>
                        <RowPoster isLarge={true} cast={false}
                                   src={movie.poster_path ? `${base_url}${movie.poster_path}` : ''}
                                   alt={movie.name}/>
                    </Link>
                ))}
            </RowPosters>
        </RowWrapper>
    );
};
