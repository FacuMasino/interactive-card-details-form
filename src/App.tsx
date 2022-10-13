import React from 'react';
import styled from 'styled-components';
import bgDesktop from './assets/img/bg-main-desktop.png';
import bgCardFront from './assets/img/bg-card-front.png';
import bgCardBack from './assets/img/bg-card-back.png';
import GlobalStyles, {devices, colors} from './GlobalStyles';
import Spacer from './Spacer';

interface Props {
  width?: string;
  height?: string;
  direction?: string;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

const CardsContainer= styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45%;
  @media ${devices.desktop} {
    height: 100%;
    width: 40%;
  }
`

const BgMain = styled.div`
  width: 100%;
  height: 85%;
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  @media ${devices.desktop} {
    height: 100%;
    width: 85%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  @media ${devices.desktop} {
    align-items: center;
    width: 60%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  label {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  @media ${devices.desktop} {
    width: 75%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  outline: none;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1px 15px;
  ::placeholder {
    color: ${colors.neutral.lightGrayishViolet};
  }
  :focus-visible {
    border-color: transparent;
    background-image: linear-gradient(white, white), linear-gradient(${colors.primary.linearGradient});
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
`

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${props=>props.direction || 'row'};
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width || 'auto'};
`;

const Button = styled.button<Props>`
  color: white;
  background-color: ${colors.neutral.veryDarkViolet};
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

const CardBack = styled.div`
  position: absolute;
  height: 155px;
  width: 280px;
  right: 15px;
  top: 30px;
  background-image: url(${bgCardBack});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 20px 20px 30px 0px rgb(0 0 0 / 10%);
  border-radius: 7px;
`;

const CardFront = styled.div`
  position: absolute;
  height: 155px;
  width: 280px;
  left: 15px;
  top: 125px;
  background-image: url(${bgCardFront});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 20px 20px 30px 0px rgb(0 0 0 / 10%);
  border-radius: 7px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
          <CardsContainer>
            <BgMain />
            <CardBack />
            <CardFront />
          </CardsContainer>
          <FormContainer>
            <Form>
              <label>Cardholder Name</label>
              <Input type="text" name="cardholder_name" placeholder="e.g. Jane Appleseed"/>
              <label>Card Number</label>
              <Input type="number" name="card_number" placeholder="e.g. 1234 5678 9123 00000"/>
              <Flex direction="row">
                <Flex direction="column" width="fit-content">
                  <label>Exp. Date (MM/YY)</label>
                  <Flex direction="row">
                    <Input type="number" name="expDate_mm" placeholder="MM" />
                    <Spacer axis="horizontal" size={18} />
                    <Input type="number" name="expDate_yy" placeholder="YY" />
                  </Flex>
                </Flex>
                <Spacer axis="horizontal" size={18} />
                <div>
                  <label>CVC</label>
                  <Input type="number" name="expDate_mm" placeholder="e.g. 123" />
                </div>
              </Flex>
              <Button width="100%" height="3rem" >Confirm</Button>
            </Form>
          </FormContainer>
      </MainContainer>
    </>
  );
}

export default App;
