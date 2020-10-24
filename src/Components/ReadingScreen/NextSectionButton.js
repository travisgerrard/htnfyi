import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import IosArrowDropright from 'react-ionicons/lib/IosArrowDropright';
import {
  getSection,
  getSubsection,
  updateSubSectionsWith,
  updateSection,
  nextSectionTitle,
  nextSectionTitleId,
  firstSubSection,
  getSectionFromSlugs,
  getSubsectionFromSlug,
  nextSectionSlug,
} from './TextScrollViewHelpers';

import { Context as ReadingContext } from '../context/ReadingContext';
import { Context as NextToReadContext } from '../context/NextToReadContext';

const NextSectionButtonContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 22px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue, Arial, sans-serif;
  line-height: 1.2;
  margin-bottom: 16px;
  margin-top: 200px;
  transition: all 0.25s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;

const NextLessonText = styled.div`
  color: rgb(1, 121, 213);
  font-size: 12px;
  font-weight: 900;
  font-family: Helvetica Neue, Arial, sans-serif;
`;

function NextSectionButton({ route }) {
  const router = useRouter();

  var routes = route.split('/');

  const { state: readingState, setReadingArray } = useContext(ReadingContext);
  const { readingArray } = readingState;
  const { setNextOnReadingList } = useContext(NextToReadContext);

  const section = getSectionFromSlugs(readingArray, routes[1]);
  const subSections = section.sections;
  const subSection = getSubsectionFromSlug(subSections, routes[2]);
  const sectionId = section.id;
  const subSectionId = subSection.id;

  const theNextSectionTitle = nextSectionTitle(
    readingArray,
    sectionId,
    subSectionId
  );
  const theNextSectionSlug = nextSectionSlug(
    readingArray,
    sectionId,
    subSectionId
  );
  const theNextSectionId = nextSectionTitleId(
    readingArray,
    sectionId,
    subSectionId
  );

  function updateReadingArray() {
    const updatedSubSection = { ...subSection, hasRead: true };
    const updatedSubSections = updateSubSectionsWith(
      subSections,
      updatedSubSection,
      subSectionId
    );
    const updatedReadingArray = updateSection(
      updatedSubSections,
      readingArray,
      sectionId
    );
    setReadingArray(updatedReadingArray);

    if (theNextSectionId === 'Close Section') {
      if (sectionId === '6') {
        // Your done
      } else {
        const nextSectionFirstSubSection = firstSubSection(
          readingArray,
          `${Number(sectionId) + 1}`
        );
        setNextOnReadingList({
          section: `${Number(sectionId) + 1}`,
          theNextSectionTitle: nextSectionFirstSubSection.title,
          theNextSectionId: nextSectionFirstSubSection.id,
        });
      }
    } else {
      setNextOnReadingList({
        section: sectionId,
        theNextSectionTitle,
        theNextSectionId,
      });
    }
  }

  return (
    <NextSectionButtonContainer
      onClick={() => {
        if (theNextSectionTitle !== 'Close Section') {
          updateReadingArray();
          router
            .push(`/${routes[1]}/${theNextSectionSlug}`)
            .then(() => window.scrollTo(0, 0));
        }
      }}
    >
      <div>
        {theNextSectionTitle !== 'Close Section' && (
          <NextLessonText> NEXT LESSON</NextLessonText>
        )}
        <div>{theNextSectionTitle}</div>
      </div>
      <IosArrowDropright color="rgb(1, 121, 213)" fontSize="32px" />
    </NextSectionButtonContainer>
  );
}

export default NextSectionButton;
