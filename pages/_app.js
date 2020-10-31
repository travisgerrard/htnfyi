import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import './styles.css';
import styled from 'styled-components';
import NextSectionButton from '../src/Components/ReadingScreen/NextSectionButton';
import MainReadingView from '../src/Components/ReadingScreen/MainReadingView';

import { Provider as ReadingContextProvider } from '../src/Components/context/ReadingContext';
import { Provider as NextToReadContextProvider } from '../src/Components/context/NextToReadContext';
import { Provider as AuthContextProvider } from '../src/Components/context/AuthContext';

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Helvetica Neue, Arial, sans-serif;
`;

const RegularText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue, Arial, sans-serif;
`;

const QuoteBox = styled.div`
  background-color: lightgray;
  border-radius: 22px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: Helvetica Neue, Arial, sans-serif;
  line-height: 1.2;
  margin-bottom: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Index = ({ Component, pageProps, router }) => {
  const mdComponents = {
    h1: (props) => <Header {...props} />,
    p: (props) => <RegularText {...props} />,
    blockquote: (props) => <QuoteBox {...props} />,
    img: (props) => <Image {...props} />,
  };

  const { route } = router;

  return (
    <AuthContextProvider>
      <ReadingContextProvider>
        <NextToReadContextProvider>
          {route === '/' ? (
            <Component {...pageProps} />
          ) : (
            <MainReadingView>
              <MDXProvider components={mdComponents}>
                <Component {...pageProps} />
              </MDXProvider>
              <NextSectionButton route={route} />
            </MainReadingView>
          )}
        </NextToReadContextProvider>
      </ReadingContextProvider>
    </AuthContextProvider>
  );
};

export default Index;
