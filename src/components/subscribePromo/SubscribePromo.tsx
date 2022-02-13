import {
  ButtonStyle,
  Container, FormWrapperStyle,
  InnerContainer, InputStyle, MenStyle,
  PromoTextStyle,
  TextWrapperStyle,
  TitleStyle,
  TopTextStyle, WomenStyle,
} from './SubscribePromo.style';
import women from '../../assets/jpg/women.png';
import men from '../../assets/jpg/men.png';

function SubscribePromo() {
  return (
    <Container>
      <InnerContainer>
        <TitleStyle>
          special offer
        </TitleStyle>
        <div>
          <TopTextStyle>
            subscribe
          </TopTextStyle>
          <TextWrapperStyle>
            <h4>
              and
            </h4>
            <PromoTextStyle>
              get 10% off
            </PromoTextStyle>
          </TextWrapperStyle>
        </div>
        <FormWrapperStyle>
          <InputStyle
            placeholder="Enter your email"
          />
          <ButtonStyle
            type="submit"
          >
            subscribe
          </ButtonStyle>
        </FormWrapperStyle>
        <WomenStyle src={women} alt="women" />
        <MenStyle src={men} alt="men" />
      </InnerContainer>
    </Container>
  );
}

export default SubscribePromo;
