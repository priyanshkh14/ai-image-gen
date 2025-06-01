import React from 'react'
import styled from 'styled-components';
import Button from './button';
import TextInput from './TextInput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* changed from center */
  align-items: center;
  padding: 60px 20px 16px; /* top padding increased to push upward */
  gap: 32px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  max-width: 500px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;


const GenerateImageForm = ({
    post,
    setPost,
    createPostLoading,
    setGenerateImageLoading,
    setCreatePostLoading,
    generateImageLoading,
  }) => {
    const generateImageFun = () => {
        setGenerateImageLoading(true);
    };
    const createPostFun = () => {
        setCreatePostLoading(true);
    };
  return (
    <Form>
        <Top>
            <Title>Generate an Image with prompt</Title>
            <Desc>Write your promt according to the image you want to generate</Desc>
        </Top>
        <Body>
            <TextInput label='Author' placeholder='Enter your name..' name='name' value={post.name} handelChange={(e)=>setPost({...post, name: e.target.value})}/>
            <TextInput label='Image Prompt' placeholder='Write a detailed prompt about the image..' name='name' rows='8' textArea value={post.prompt} handelChange={(e)=>setPost({...post, prompt: e.target.value})}/>
            ** You can post the AI generated image to the community **
        </Body>
        <Actions>
            <Button text='Generate Image' flex leftIcon={<AutoAwesome/>} isLoading={generateImageLoading} isDisabled={post.prompt === ''} onClick={()=>generateImageFun()}/>
            <Button text='Post Image' flex type='secondary' leftIcon={<CreateRounded/>} isLoading={createPostLoading} isDisabled={post.name === '' || post.prompt === '' || post.photo === ''} onClick={()=>createPostFun()}/>
        </Actions>
    </Form>
  )
}

export default GenerateImageForm