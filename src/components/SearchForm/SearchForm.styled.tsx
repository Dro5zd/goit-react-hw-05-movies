import styled from 'styled-components'
import {Search} from '@styled-icons/bootstrap/Search';

export const SearchFormWrapper = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 80px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 48px;
  border: 0;
  opacity: 1;
  position: relative;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: red;
  
  &:hover{
  opacity: 0.9;
  }
  
  & span{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`

export const SearchIcon = styled(Search)`
  width: 30px;
  position: absolute;
  top: 9px;
  left: 27px;
  color: white;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 4px 10px;
  
  &::placeholder{
    font: inherit;
    font-size: 18px;
  }
`;