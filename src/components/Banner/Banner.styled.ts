import styled from 'styled-components'

const base_url = 'https://image.tmdb.org/t/p/original'
interface IBannerWrapper {
    movie: {backdrop_path: string}
}


export const BannerWrapper = styled.div<IBannerWrapper>`
  background-size: cover;
  background-image: url(${ props => `${base_url}${props.movie?.backdrop_path}`});
  background-position: center center;
  object-fit: contain;
  height: 448px;
`

export const BannerTitle = styled.h1`
  margin: 0 30px ;
  font-weight: 800;
  font-size: 40px;
  padding-top: 140px;
  height: 190px;
`

export const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
;
`
//
// export const StyledLink = styled(NavLink)`
//   margin-right: 30px;
//   font-size: 22px;
//   color: white;
//   text-decoration: none;
//
//   &.active {
//     font-weight: bold;
//   }
// `;
