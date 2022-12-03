import styled from 'styled-components';

interface IRowPoster {
    isLarge: boolean;
    cast: boolean
}

export const RowWrapper = styled.div<IRowPoster>`
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  top: ${({cast}) => (cast ? '0vh' : '65vh')};
  z-index: 1;
  min-height: ${({isLarge}) => (isLarge ? '300px' : '100px')};
  //padding-top: 60vh;
`;

export const RowTitle = styled.h2`
  //color: white;
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  min-height: 100px;
  
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const RowPosterTitle = styled.p`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px 5px;
  z-index: 6;
  position: absolute;
  bottom: 0;
  width: 80%;
  transition: transform 450ms;
`;
export const RowPosterWrapper = styled.div`
  position: relative;
  

  &:hover ${RowPosterTitle}{
    transform: scale(1.08);
  }
 
`;

export const RowPoster = styled.img<IRowPoster>`
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;
  max-height: ${({isLarge}) => (isLarge ? '250px' : '100px')};
  width: 150px;
  &:hover{
    transform: scale(1.08);
  }
  
`;
