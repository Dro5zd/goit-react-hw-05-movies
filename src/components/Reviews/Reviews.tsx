import React, {useContext, useEffect, useState} from 'react';
import instance from '../../api/axios';
import requests from '../../api/requests';
import {useLocation, useParams} from 'react-router-dom';
import {MovieIdType} from '../../pages/MovieDetails';
import {ItemContent, ItemReview, ItemTitle, ReviewTitle, ReviewWrapper} from './Reviews.styled';
import {IsLoadingContext} from '../../App';


function Reviews() {

    const {movieId} = useParams<MovieIdType>();

    const location = useLocation()

    const [movieReviews, setMovieReviewsCredits] = useState([{
        id: 0,
        author: '',
        content: '',
    }]);

    const {
        setIsLoading
    } = useContext(IsLoadingContext);

    useEffect(() => {
            setIsLoading(true);

            async function fetchMovieReviews() {
                try {
                    const res = await instance.get(requests.fetchMovieReviews(movieId));
                    setMovieReviewsCredits(res.data.results)
                }
                catch (e) {
                    console.log(e)
                }
                finally {
                    setIsLoading(false);
                }
            }

            fetchMovieReviews();
        }, [movieId, setIsLoading]
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

export default Reviews