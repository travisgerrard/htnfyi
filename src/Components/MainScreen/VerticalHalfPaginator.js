import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import { Context as ReadingContext } from '../context/ReadingContext';
import { Context as NextToReadContext } from '../context/NextToReadContext';

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const TopHalfContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 25%;
  align-self: center;
  transition: all 0.5s;
  opacity: ${(props) => (props.listFullScreen === '50vh' ? '100%' : '0%')};
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  position: absolute;
  width: 100%;
  transition: all 0.5s;
  top: ${(props) => props.listFullScreen};
`;

const StyledCard = styled.div`
  flex-shrink: 0;
  background-color: white;

  /* height: 80%; */
  width: 80vw;
  margin: 2.5vw;
  margin-top: 5vh;

  border-radius: 25px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  /* top: 50vh; */
`;

function VerticalHalfPaginator() {
  const [listFullScreen, setListFullScreen] = useState('50vh');

  const { state: readingState } = useContext(ReadingContext);
  const { readingArray } = readingState;

  return (
    <Container>
      <TopHalfContainer listFullScreen={listFullScreen}>
        <Title>Hello</Title>
      </TopHalfContainer>
      <StyledCardContainer listFullScreen={listFullScreen}>
        {readingArray.map((item) => {
          return (
            <CardsArray
              item={item}
              key={item.id}
              setListFullScreen={setListFullScreen}
              listFullScreen={listFullScreen}
            />
          );
        })}
      </StyledCardContainer>
    </Container>
  );
}

export default VerticalHalfPaginator;

const CardsArray = ({ item, setListFullScreen, listFullScreen }) => {
  const { state: readingState } = useContext(ReadingContext);
  const { readingArray } = readingState;

  const readingItem = readingArray.filter((arrayItem) => {
    return arrayItem.id === item.id;
  });

  return (
    <StyledCard>
      <Title
        onClick={() =>
          setListFullScreen(listFullScreen === '50vh' ? '0vh' : '50vh')
        }
      >
        Up
      </Title>
      <Card key={readingItem[0].id} item={readingItem[0]} />
    </StyledCard>
  );
};
