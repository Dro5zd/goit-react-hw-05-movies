import React, {useContext, useEffect, useState} from 'react';
import requests from '../../api/requests';
import noImage from '../../assets/no-image.jpeg'
import {useParams} from 'react-router-dom';
import {MovieIdType} from '../../pages/MovieDetails';
import instance from '../../api/axios';
import {RowPoster, RowPosters, RowPosterTitle, RowPosterWrapper, RowTitle, RowWrapper} from '../Row/Row.styled';
import {IsLoadingContext} from '../../App';

const base_url = 'https://image.tmdb.org/t/p/original'
const Cast = () => {

    const {movieId} = useParams<MovieIdType>();

    const [movieCredits, setMovieCredits] = useState([{
        id: 0,
        name: '',
        character: '',
        profile_path: ''
    }]);

    const {
        setIsLoading
    } = useContext(IsLoadingContext);

    useEffect(() => {
            setIsLoading(true);

            async function fetchMovieCredits() {
                try {
                    const res = await instance.get(requests.fetchMovieCredits(movieId));
                    setMovieCredits(res.data.cast)

                } catch (e) {

                } finally {
                    setIsLoading(false);
                }
            }

            fetchMovieCredits();
        }, [movieId, setIsLoading]
    );

    return (
        <RowWrapper isLarge={true} top='0'>
            <RowTitle>Cast</RowTitle>
            <RowPosters>
                {movieCredits.map(item => (
                    <RowPosterWrapper key={item.id}>
                        <RowPosterTitle>{item.name}</RowPosterTitle>
                        <RowPoster isLarge={true}
                                   src={item.profile_path ? `${base_url}${item.profile_path}` : `${noImage}`}
                                   alt={item.name}/>
                    </RowPosterWrapper>
                ))}
            </RowPosters>
        </RowWrapper>
    );
};

export default Cast
