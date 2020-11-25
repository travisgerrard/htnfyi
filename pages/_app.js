import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import './styles.css';
import styled from 'styled-components';
import NextSectionButton from '../src/Components/ReadingScreen/NextSectionButton';
import MainReadingView from '../src/Components/ReadingScreen/MainReadingView';

import { Provider as ReadingContextProvider } from '../src/Components/context/ReadingContext';
import { Provider as NextToReadContextProvider } from '../src/Components/context/NextToReadContext';
import { Provider as AuthContextProvider } from '../src/Components/context/AuthContext';
import { Provider as TextContextProvider } from '../src/Components/context/TextContext';

const Index = ({ Component, pageProps, router }) => {
  const { route, asPath } = router;
  console.log(router);
  console.log(route);
  console.log(asPath);
  return (
    <AuthContextProvider>
      <ReadingContextProvider>
        <NextToReadContextProvider>
          <TextContextProvider>
            {asPath === '/' ? (
              <Component {...pageProps} />
            ) : (
              <MainReadingView>
                <Component {...pageProps} />
                <NextSectionButton route={asPath} />
              </MainReadingView>
            )}
          </TextContextProvider>
        </NextToReadContextProvider>
      </ReadingContextProvider>
    </AuthContextProvider>
  );
};

export default Index;
