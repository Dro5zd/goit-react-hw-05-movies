import React, {ChangeEvent, FormEvent, useState} from 'react';
import {SearchFormButton, SearchFormInput, SearchFormWrapper, SearchIcon} from './SearchForm.styled';
import Notiflix from 'notiflix';
import {useSearchParams} from 'react-router-dom';

export const SearchForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams('');
    searchParams.get('search');
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValue.trim() === '') {
            return Notiflix.Notify.failure('Sorry, but you didn\'t enter anything. Please try again.');
        }
        setSearchParams({search: inputValue})
        setInputValue('');
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value.toLowerCase())
    };

    return (
        <SearchFormWrapper onSubmit={onSubmit}>
            <SearchFormInput
                onChange={onChangeHandler}
                type="text"
                autoComplete="off"
                value={inputValue}
                autoFocus
                placeholder="Search movies"
            />
            <SearchFormButton type="submit">
                <SearchIcon/>
                <span>Search</span>
            </SearchFormButton>
        </SearchFormWrapper>
    );
}