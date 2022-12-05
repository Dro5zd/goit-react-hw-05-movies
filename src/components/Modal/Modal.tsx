import React, {MouseEvent, useEffect} from 'react';
import {ModalDiv, OverlayModal} from './Modal.styled';
import Youtube, {YouTubeProps} from 'react-youtube';

interface IModal {
    setTrailerUrl: (value: string) => void,
    trailerUrl: string,
}

export function Modal({trailerUrl, setTrailerUrl}: IModal) {
    const escHandler = (e: any) => {
        if (e.key === "Escape") {
            setTrailerUrl('')
        }
    }

    const closeModalOnBackdrop = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            setTrailerUrl('')
        }
    };

    const opts: YouTubeProps['opts'] = {
        height: '400',
        width: '720',
        playerVars: {
            autoplay: 1,
        },
    }

    useEffect(() => {
        document.addEventListener("keydown", escHandler);
        return () => {
            document.removeEventListener("keydown", escHandler);
        };
    }, []);

    return <OverlayModal onClick={closeModalOnBackdrop}>
        <ModalDiv>
            <Youtube videoId={trailerUrl} opts={opts}/>
        </ModalDiv>
    </OverlayModal>
}