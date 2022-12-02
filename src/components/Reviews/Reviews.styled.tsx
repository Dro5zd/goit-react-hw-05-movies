import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  margin-left: 20px;
  border-top: red solid 2px;
  margin-right: 20px;
  position: relative;
  z-index: 1;
  min-height: 300px;
  background-color: rgba(143, 143, 143, 0.04);
  height: 200px;
  overflow: scroll;
  //padding-top: 60vh;
`;

export const ReviewTitle = styled.h2`
  font-weight: 800;
  font-size: 30px;
  padding-bottom: 0.3rem;
`

export const ItemReview = styled.div`
  padding: 10px 20px;
`;
export const ItemTitle = styled.h3`
 margin: 5px 0;
`;

export const ItemContent = styled.span`
  font-weight: normal;
  font-size: 18px;
`;