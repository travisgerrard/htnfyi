import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AccessCodeScreen from '../Authorization/AccessCodeScreen';
import DisclaimerPage from '../Authorization/DisclaimerPage';
import { Context as AuthContext } from '../context/AuthContext';

const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
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

export default function MainReadingView({ children }) {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  console.log(state);

  if (state.isLoading) return null;

  if (state.token === null) {
    return <AccessCodeScreen />;
  } else {
    if (state.disclaimer === null) {
      return <DisclaimerPage />;
    } else {
      return (
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
            <TextContainer>{children}</TextContainer>
          </BodyContainer>
        </>
      );
    }
  }
}
