import styled from 'styled-components';

interface IRowPoster {
    isLarge: boolean;
}

export const RowWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const RowTitle = styled.h2`
  color: aliceblue;
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

export const RowPoster = styled.img<IRowPoster>`
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;
  max-height: ${({isLarge}) => (isLarge ? '250px' : '100px')};
  
  &:hover{
    transform: scale(1.08);
  }
`;
