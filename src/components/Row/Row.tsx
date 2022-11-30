import React, {useEffect, useState} from 'react';
import './Row.styled'
import instance from '../../api/axios';
import {RowPoster, RowPosters, RowTitle, RowWrapper} from './Row.styled';
import {Link} from 'react-router-dom';

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
    title: string
}

const Row = ({title, fetchUrl, isLargeRow}: IRow) => {
    const [movies, setMovies] = useState<IMovies[]>([]);

    useEffect(() => {
            async function fetchData() {
                const request = await instance.get(fetchUrl);
                setMovies(request.data.results)
                return request;
            }

            fetchData();
        }, [fetchUrl]
    );

    return (
        <RowWrapper>
            <RowTitle className="row-title">{title}</RowTitle>
            <RowPosters>
                {movies.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <RowPoster isLarge={isLargeRow}
                               src={movie.poster_path ? `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` : ''}
                               alt={movie.name}/>
                    </Link>
                ))}
            </RowPosters>
        </RowWrapper>
    )
}

export default Row