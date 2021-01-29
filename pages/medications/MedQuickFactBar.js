import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: rgb(0, 162, 97); */
  /* padding-top: 10px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 25px;
  margin-top: 50spx; */
  /* width: 60vw; */
  /* max-width: 400px; */
  /* border-radius: 25px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); */
`;

const A1cContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #ff7576;
  width: 20%;
  text-align: center;
`;

const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #dbcd4a;
  width: 20%;
  text-align: center;
`;

const LowBloodSugarContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #f3b05c;
  width: 20%;
  text-align: center;
`;

const WeightChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #727fb5;
  width: 20%;
  text-align: center;
`;

const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #a665a6;
  width: 20%;
  text-align: center;
`;

const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica Neue, Arial, sans-serif;
  background-color: #32b3c4;
  width: 20%;
  text-align: center;
`;

const TopContainer = styled.div`
  height: 40%;
  line-height: 50px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  font-weight: bold;

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
`;

const BottomContainer = styled.div`
  height: 100px;
  line-height: 75px;
  background-color: lightgray;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  /* font-weight: bold; */

  font-size: 18px;
  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
`;

function MedQuickFactBar() {
  return (
    <Container>
      <A1cContainer>
        <TopContainer>A1c↓</TopContainer>

        <BottomContainer>1-2%</BottomContainer>
      </A1cContainer>
      <RoutineContainer>
        <TopContainer>Routine</TopContainer>

        <BottomContainer>
          <span>Daily / Twice Daily Pill</span>
        </BottomContainer>
      </RoutineContainer>
      <LowBloodSugarContainer>
        <TopContainer>
          <span>Low Blood Sugar</span>
        </TopContainer>

        <BottomContainer>
          <span>No severe risk</span>
        </BottomContainer>
      </LowBloodSugarContainer>
      <WeightChangeContainer>
        <TopContainer>
          <span>Weight Change</span>
        </TopContainer>

        <BottomContainer>None</BottomContainer>
      </WeightChangeContainer>
      <HeartContainer>
        <TopContainer>
          <span>Heart Benefit</span>
        </TopContainer>

        <BottomContainer>Mild</BottomContainer>
      </HeartContainer>
      <CostContainer>
        <TopContainer>
          <span>Cost</span>
        </TopContainer>

        <BottomContainer>Low</BottomContainer>
      </CostContainer>
    </Container>
  );
}

export default MedQuickFactBar;
