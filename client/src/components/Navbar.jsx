import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { AddRounded, ExploreRounded } from "@mui/icons-material"
import Button from "./button"

const Container = styled.div`
  height: 60px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 18px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/");
  return (
    <Container>
        DreamPixel{
            path[1] === "post" ? ( 
                <Button
                onClick={() =>  navigate("/")}
                text="Explore Post"
                leftIcon={
                    <ExploreRounded
                        style={{
                            fontSize: "18px",
                        }}
                    />
                }
                type="secondary"
            />
        ) : (
            <Button
                onClick={() =>  navigate("/post")}
                text="Create new Post"
                leftIcon={
                    <AddRounded 
                        style={{
                            fontSize: "18px",
                        }}
                    />
                }
            />
        )}
    </Container>
  )
}

export default Navbar