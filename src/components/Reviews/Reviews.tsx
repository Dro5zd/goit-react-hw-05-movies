import React, {useEffect, useState} from 'react';
import instance from '../../api/axios';
import requests from '../../api/requests';
import {useLocation, useParams} from 'react-router-dom';
import {MovieIdType} from '../../pages/MovieDetails';
import {ItemContent, ItemReview, ItemTitle, ReviewTitle, ReviewWrapper} from './Reviews.styled';


export function Reviews() {

    const { movieId } = useParams<MovieIdType>();

    const location = useLocation()

    const [movieReviews, setMovieReviewsCredits] = useState([{
        id: 0,
        author: '',
        content: '',
    }]);

    useEffect(() => {
            async function fetchMovieReviews() {
                const request = await instance.get(requests.fetchMovieReviews(movieId));
                setMovieReviewsCredits(request.data.results)
                return request;
            }
        fetchMovieReviews();
        }, []
    );
    return (
        <>
                <ReviewTitle>{movieReviews.length} Member reviews for {location.state.movieName}</ReviewTitle>
            <ReviewWrapper>
                {
                    movieReviews.map(item => {
                        return <ItemReview key={item.id}>
                            <ItemTitle>{item.author}</ItemTitle>
                            <ItemContent>{item.content}</ItemContent>
                        </ItemReview>
                    })
                }
            </ReviewWrapper>
        </>

    )
}