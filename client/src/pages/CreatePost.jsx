import React, { useState } from 'react'
import style from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm'  
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = style.div`
  height: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }`

const Wrapper = style.div`
    width: 100%;
    height: fit-content;
  width: 100%;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
    const [generateImageLoading, setGenerateImageLoading] = useState(false);
    const [createPostLoading, setCreatePostLoading] = useState(false);
    const [post, setPost] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
  return (
    <Container>
        <Wrapper>
            <GenerateImageForm
                post={post}
                setPost={setPost} 
                createPostLoading={createPostLoading}
                setGenerateImageLoading={setGenerateImageLoading}
                setCreatePostLoading={setCreatePostLoading}
                generateImageLoading={generateImageLoading}
            />
            <GeneratedImageCard src={post?.photo} loading={generateImageLoading}/>
        </Wrapper>
    </Container>
  )
}

export default CreatePost