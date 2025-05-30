import React from 'react'
import style from 'styled-components'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'

const Container = style.div`
  heihjht: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }`

const Headline = style.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    font-size: 22px;
  }`

const Span = style.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Wrapper = style.div`
  width: 100%;
  max-width: 1400px;
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardWrapper = style.div`
  display: grid;
  gap: 20px;
  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  @media(min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  @media(min-width: 689px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  return (
    <Container>
      <Headline>Explore popular posts!
        <Span>♦ Generate with AI ♦</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home