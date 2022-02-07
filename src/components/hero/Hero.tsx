import { v4 as uuidv4 } from 'uuid';
import MainPromo from '../mainPromo/MainPromo';
import {
  AdventContainerStyle,
  AdventElementContainerStyle, AdventTextStyle, AdventTextWrapperStyle, AdventTitleStyle,
  BannersContainerStyle,
  Container,
  HeroWrapperStyle, MainContainerStyle,
} from './Hero.style';
import mainPromo from '../../assets/png/mainPromo.png';
import CategoryCard from '../categoryCard/CategoryCard';
import { data } from '../../data/category';
import { ReactComponent as TruckSvg } from '../../assets/svg/truck.svg';
import { ReactComponent as RefreshSvg } from '../../assets/svg/refresh.svg';
import { ReactComponent as SupportSvg } from '../../assets/svg/support.svg';

function Hero() {
  return (
    <MainContainerStyle>
      <Container>
        <HeroWrapperStyle>
          <MainPromo
            text="banner"
            title="your title text"
            background={mainPromo}
          />
          <BannersContainerStyle>
            {
              data.map((ele) => (
                <div key={uuidv4()}>
                  <CategoryCard
                    width={ele.width}
                    height={ele.height}
                    background={ele.background}
                    title={ele.title}
                    banner={ele.banner}
                  />
                </div>
              ))
            }
          </BannersContainerStyle>
        </HeroWrapperStyle>
        <AdventContainerStyle>
          <AdventElementContainerStyle>
            <TruckSvg />
            <AdventTextWrapperStyle>
              <AdventTitleStyle>free shipping</AdventTitleStyle>
              <AdventTextStyle>On all UA order or order above $100</AdventTextStyle>
            </AdventTextWrapperStyle>
          </AdventElementContainerStyle>
          <AdventElementContainerStyle>
            <RefreshSvg />
            <AdventTextWrapperStyle>
              <AdventTitleStyle>30 days return</AdventTitleStyle>
              <AdventTextStyle>Simply return it within 30 days for an exchange</AdventTextStyle>
            </AdventTextWrapperStyle>
          </AdventElementContainerStyle>
          <AdventElementContainerStyle>
            <SupportSvg />
            <AdventTextWrapperStyle>
              <AdventTitleStyle>support 24/7</AdventTitleStyle>
              <AdventTextStyle>Contact us 24 hours a day, 7 days a week</AdventTextStyle>
            </AdventTextWrapperStyle>
          </AdventElementContainerStyle>
        </AdventContainerStyle>
      </Container>
    </MainContainerStyle>
  );
}

export default Hero;
