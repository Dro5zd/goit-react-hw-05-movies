import React from 'react';
import logo from '../../assets/Goitiflix.svg';
import {Logo404, NotFoundDesc, NotFoundTitle, NotFoundWrapper} from './NotFound.styled';
import {BannerButton} from '../../components/Banner/Banner.styled';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundTitle>Lost your way?</NotFoundTitle>
            <Logo404 src={logo} alt={'main-logo'}/>
            <NotFoundDesc>Sorry, we couldn't find this page you were looking for. To return to the Goitflix homepage click on the button bellow.</NotFoundDesc>
            <Link to={`/`}>
                <BannerButton more={true}>Home pgae</BannerButton>
            </Link>
        </NotFoundWrapper>
    );
};

export default NotFound