import React, {useContext, useEffect, useState} from 'react';
import './Row.styled'
import instance from '../../api/axios';
import {RowPoster, RowPosters, RowTitle, RowWrapper} from './Row.styled';
import {Link, useSearchParams} from 'react-router-dom';
import Notiflix from 'notiflix';
import {IsLoadingContext} from '../../App';

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
    const {
        setIsLoading
    } = useContext(IsLoadingContext);

    useEffect(() => {
            setIsLoading(true);

            async function fetchData() {
                try {
                    const res = await instance.get(fetchUrl);
                    if (res.data.results.length === 0) {
                        setSearchParams({search: ''})
                        return Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please' +
                            ' try again.');
                    } else
                        setMovies(res.data.results)
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }, [fetchUrl, setSearchParams]
    );

    return (
        <RowWrapper isLarge={isLargeRow} cast={false}>
            <RowTitle className="row-title">{title}</RowTitle>
            <RowPosters>
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
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