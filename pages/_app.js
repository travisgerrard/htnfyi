import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import './styles.css';
import styled from 'styled-components';
import Link from 'next/link';
import { Provider as ReadingContextProvider } from '../src/Components/context/ReadingContext';
import { Provider as NextToReadContextProvider } from '../src/Components/context/NextToReadContext';

const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
`;

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

const NavBar = styled.div`
  position: relative;
  background-color: rgb(0, 162, 97);
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavBarButton = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 600px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  min-height: 100vh;
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
  console.log(route);

  return (
    <>
      {route === '/' ? (
        <ReadingContextProvider>
          <NextToReadContextProvider>
            <Component {...pageProps} />
          </NextToReadContextProvider>
        </ReadingContextProvider>
      ) : (
        <>
          <NavBar>
            <NavBarButton>
              Aa: <NavBarButton style={{ cursor: 'pointer' }}>+</NavBarButton> /{' '}
              <NavBarButton style={{ cursor: 'pointer' }}>-</NavBarButton>
            </NavBarButton>
            <Link href="/">
              <NavBarButton style={{ cursor: 'pointer' }}>Close</NavBarButton>
            </Link>
          </NavBar>
          <BodyContainer>
            <TextContainer>
              <MDXProvider components={mdComponents}>
                <Component {...pageProps} />
              </MDXProvider>
            </TextContainer>
          </BodyContainer>
        </>
      )}
    </>
  );
};

export default Index;
