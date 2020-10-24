import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import TopHalfMainScreenIndex from './TopHalfMainScreen/TopHalfMainScreenIndex';
import { Context as ReadingContext } from '../context/ReadingContext';
import { Context as NextToReadContext } from '../context/NextToReadContext';

const TOTAL_NUMBER_OF_SECTIIONS = 26;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const TopHalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 25px;
  max-width: 500px;
  justify-items: center;
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

export const READING_KEY = 'READING';
export const NEXT_READING_KEY = 'NEXT_READING';

function VerticalHalfPaginator() {
  const { setReadingArray } = useContext(ReadingContext);
  const { setNextOnReadingList } = useContext(NextToReadContext);

  useEffect(() => {
    async function firstLoad() {
      try {
        const value = localStorage.getItem(READING_KEY);
        if (value !== null) {
          console.log('first load ran');
          const readingArray = JSON.parse(value);
          setReadingArray(readingArray);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const value = localStorage.getItem(NEXT_READING_KEY);

        if (value !== null) {
          const nextReadingArray = JSON.parse(value);
          setNextOnReadingList(nextReadingArray);
        }
      } catch (error) {
        console.log(error);
      }
    }

    firstLoad();
  }, []);

  const [listFullScreen, setListFullScreen] = useState('50vh');
  const [offsetPercent, setOffsetPercent] = useState(1);

  const { state: readingState } = useContext(ReadingContext);
  const { readingArray } = readingState;

  return (
    <Container>
      <TopHalfContainer listFullScreen={listFullScreen}>
        <TopHalfMainScreen offsetPercent={offsetPercent} />
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

const TopHalfMainScreen = ({ offsetPercent }) => {
  const { state: readingState } = useContext(ReadingContext);
  const { readingArray } = readingState;

  const [percentRead, setPercentRead] = useState(0);

  const { state: readingListState } = useContext(NextToReadContext);
  const { nextOnReadingList } = readingListState;

  useEffect(() => {
    readingProgress();
    console.log('This ran');
  }, [readingArray]);

  function readingProgress() {
    const hasReadArray = readingArray.map((section) => {
      return section.sections.filter((subSection) => {
        return subSection.hasRead;
      }).length;
    });
    const hasReadTotal = hasReadArray.reduce((a, b) => a + b, 0);
    const percentHasRead = Math.round(
      (hasReadTotal / TOTAL_NUMBER_OF_SECTIIONS) * 100
    );

    setPercentRead(percentHasRead);
  }

  return (
    <TopHalfMainScreenIndex
      percent={percentRead}
      offsetPercent={offsetPercent}
      nextOnReadingList={nextOnReadingList}
      style={{}}
    />
  );
};
