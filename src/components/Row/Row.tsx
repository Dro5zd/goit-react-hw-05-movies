import React, {useEffect, useState} from 'react';
import './Row.styled'
import instance from '../../api/axios';
import {RowPoster, RowPosters, RowTitle, RowWrapper} from './Row.styled';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import Notiflix from 'notiflix';
import {Loader} from '../Loader/Loader';

const base_url = 'https://image.tmdb.org/t/p/original'

interface IRow {
    title: string,
    fetchUrl: string,
    isLargeRow: boolean
}

export interface IMovies {
    id: string,
    poster_path: string,
    backdrop_path: string,
    name: string,
    original_name: string,
    title: string,
    overview: string
}

const Row = ({title, fetchUrl, isLargeRow}: IRow) => {
    const [movies, setMovies] = useState<IMovies[]>([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const [isLoading, setIsLoading] = useState(false)

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
            async function fetchData() {
                try {
                    const response = await instance.get(fetchUrl);
                    if (response.data.results.length === 0) {
                        setSearchParams({search: ''})
                        return Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please' +
                            ' try again.');
                    } else
                    setMovies(response.data.results)
                } catch (e) {

                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }, [fetchUrl]
    );

    return (
        <RowWrapper isLarge={isLargeRow} cast={false}>
        <Loader isLoading={isLoading}/>
            <RowTitle className="row-title">{title}</RowTitle>
            <RowPosters>
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} state={{...location.state, from: location}}>
                        <RowPoster isLarge={isLargeRow} cast={false}
                                   src={movie.poster_path ? `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` : ''}
                                   alt={movie.name}/>
                    </Link>
                ))}
            </RowPosters>
        </RowWrapper>
    )
}

export default Row