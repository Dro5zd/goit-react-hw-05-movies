import {useState} from 'react';
import {IMovies} from '../components/Row/Row';
const movieTrailer = require( 'movie-trailer' )
export const useHandlerTrailer = () => {
    const [trailerUrl, setTrailerUrl] = useState<string>('')
    const handleTrailer = (movie: IMovies) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || '')
                .then((url: string) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    // @ts-ignore
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error: any) => console.log(error))
        }
    }
    return {handleTrailer, trailerUrl}
}