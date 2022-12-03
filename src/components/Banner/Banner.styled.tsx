import styled from 'styled-components'
import {Play} from '@styled-icons/foundation';

const base_url = 'https://image.tmdb.org/t/p/original'

interface IBannerWrapper {
    movie: { backdrop_path: string }
}

interface IButton {
    more: boolean
}



export const BannerWrapper = styled.div<IBannerWrapper>`
  background-size: cover;
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111),
  url(${props => props.movie?.backdrop_path ? `${base_url}${props.movie?.backdrop_path}` : ''});
  background-position: center center, center center;
  object-fit: contain;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
`

export const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
  width: 600px;

`
export const BannerTitle = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  padding-bottom: 0.3rem;

`

export const PlayIcon = styled(Play)`
  width: 30px;
  position: absolute;
  top: 5px;
  left: 20px;
  color: black;
`;
export const BannerButton = styled.button<IButton>`
  cursor: pointer;
  margin-right: 1rem;
  font-size: 20px;

  border: none;
  outline: none;
  font-weight: 700;

  color: ${props => !props.more ? 'black' : 'white'};
  background-color: ${props => !props.more ? 'white' : 'rgba(117,117,117,0.62)'};
  padding: ${props => !props.more ? '0.5rem 2rem 0.5rem 3.1rem' : '0.5rem 2rem'};
  position: relative;

  &:hover {
    color: white;
    background-color: rgba(51, 51, 51, 0.5);
    transition: all 0.2s;
  }

  &:hover ${PlayIcon} {
    color: white;
    background-color: rgba(51, 51, 51, 0.5);
    transition: all 0.2s;
  }
`

export const BackButton = styled.button`
  cursor: pointer;
  margin-right: 1rem;
  font-size: 20px;

  border: none;
  outline: none;
  font-weight: 700;

  color: white;
  background-color: rgba(117, 117, 117, 0.62);
  padding: 0.5rem 2rem;
  position: relative;

  &:hover {
    color: white;
    background-color: rgba(51, 51, 51, 0.5);
    transition: all 0.2s;
  }
`

export const BannerDescription = styled.p`
  width: 45rem;
  line-height: 1.3;
  font-size: 1.3rem;
  max-width: 600px;
  height: 150px;
  overflow: scroll;
`

export const MoreInfoContent = styled.div`
  margin-top: 300px;
  padding: 30px;
`
