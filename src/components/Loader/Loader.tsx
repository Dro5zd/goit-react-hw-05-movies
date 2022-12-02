import React from 'react';
import {LoaderBody, LoaderWrapper} from './Loader.styled';

interface ILoader {
    isLoading: boolean
}

export const Loader = ({isLoading}: ILoader) => {
    return (
        <LoaderWrapper disable={isLoading}>
            <LoaderBody></LoaderBody>
        </LoaderWrapper>
    );
};





