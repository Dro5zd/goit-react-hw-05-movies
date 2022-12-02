import React, {useEffect, useState} from 'react';
import {MainLogo, NavHeader, StyledLink} from './NavBar.styled';
import logo from '../../assets/Goitiflix.svg'
import {Link} from 'react-router-dom';

export const Navbar = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll', () => {
            })
        }
    }, [])

    return (
        <NavHeader show={show}>
            <Link to={'/'}>
                <MainLogo src={logo} alt={'main-logo'} width={120}/>
            </Link>
            <nav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'/movies'}>Movies</StyledLink>
            </nav>
        </NavHeader>
    );
};
