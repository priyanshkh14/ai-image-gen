import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 600px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + "80"};
  border-radius: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.black + "50"};
`;

const Text = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const GeneratedImageCard = ({ src, loading }) => {
    console.log('loading:', loading, 'src:', src);
    return (
      <Container>
        {loading ? (
          <>
            <CircularProgress style={{ color: 'blue', width: '24px', height: '24px' }} />
            <Text>Generating your image...</Text>
          </>
        ) : src ? (
          <Image src={src} alt="Generated" />
        ) : (
          <Text>Write a prompt to generate an image</Text>
        )}
      </Container>
    );
  };
  

export default GeneratedImageCard;
