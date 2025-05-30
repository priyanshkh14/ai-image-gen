import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    max-width: 550px;
    display: flex;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.text_secondary + 90};
    color: ${({ theme }) => theme.text_primary};
    border-radius: 8px;
    padding: 12px 16px;
    cursor: pointer;
    gap: 6px;
    align-items: center;

`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
        <SearchOutlined/>
        <input 
        pklaceholder='Search posts or prompts...'
        style={{
            border: 'none',
            outline: 'none',
            width  : '100%',
            color: 'inherit',
            fontSize: '16px',
            backgroundColor: 'transparent',
        }}
        />
    </SearchBarContainer>
  )
}

export default SearchBar