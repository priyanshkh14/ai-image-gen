import React from 'react'
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Avatar from '@mui/material/Avatar';
import { DownloadRounded } from '@mui/icons-material';
import FileSaver from 'file-saver';
 
const Card = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
        scale: 1.05;
    }
    &:nth-child(7n+1) {
        grid-column: auto / span 2;
        grid-row: auto / span 2;
    }
`;

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.white};
    transition: opacity 0.3s ease;
    border-radius: 6px;
    justify-content: end;
    padding: 12px;

    opacity: 0;
    pointer-events: none;

    ${Card}:hover & {
        opacity: 1;
        pointer-events: auto;
    }
`;

const Prompt = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.white};
    font-size: 15px;
`;

const Author = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.white};
    display: flex;
    gap: 8px;
    align-items: center;
`;

const ImageCard = ({item}) => {
  return (
    <Card>
        <LazyLoadImage alt={item?.prompt} style={{borderRadius: '10px'}} width='100%' src={item?.photo}/>
        <HoverOverlay>
            <Prompt>{item?.prompt}</Prompt>
            <div style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center', 
                justifyContent: 'space-between',
            }}> 
                <Author>
                    <Avatar sx={{width: '32px', height: '32px'}}>{item.author[0]}</Avatar>
                    {item?.author}
                </Author>
                <DownloadRounded onClick={()=>FileSaver.saveAs(item?.photo, "download.jpg")}/>
            </div>
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard