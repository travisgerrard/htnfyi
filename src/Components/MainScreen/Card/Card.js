import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  padding: 25px;
`;

const Headline = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: Helvetica Neue, Arial, sans-serif;
  line-height: 1;
  margin: 0;
`;

const SectionsCompleted = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-family: Helvetica Neue, Arial, sans-serif;
  color: rgb(1, 121, 213);
  line-height: 1;
`;

const Subheadline = styled.p`
  font-size: 16px;
  font-family: Helvetica Neue, Arial, sans-serif;

  /* white-space: normal; */
  line-height: 1;
`;

const TopicListItem = styled.p`
  font-size: 20px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: lighter;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

function Card({ item }) {
  const { id, slug, title, subtitle, sections } = item;

  function returnSectionsCompleted() {
    const hasRead = sections.filter((subSection) => {
      return subSection.hasRead;
    }).length;

    return hasRead;
  }

  return (
    <Container key={id}>
      <Headline>{title}</Headline>
      <SectionsCompleted>
        {returnSectionsCompleted()}/{sections.length} LESSONS COMPLETED
      </SectionsCompleted>
      <Subheadline>{subtitle}</Subheadline>
      <hr />
      {sections.map((section, index) => {
        return (
          <>
            <Link href={`/${slug}/${section.slug}`}>
              <TopicListItem>{section.title}</TopicListItem>
            </Link>
            <hr />
          </>
        );
      })}
    </Container>
  );
}

export default Card;
