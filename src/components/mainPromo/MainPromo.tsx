import {
  ArrowControlStyle, BannerTextStyle,
  ContainerStyle,
  ControlWrapperStyle,
  TextWrapperStyle,
  TitleWrapperStyle,
} from './MainPromo.style';
import { ReactComponent as ArrowLeftSvg } from '../../assets/svg/chevron-left.svg';
import { ReactComponent as ArrowRightSvg } from '../../assets/svg/chevron-right.svg';
import { IMainPromo } from '../../types/hero';

function MainPromo({ text, title, background }: IMainPromo) {
  return (
    <ContainerStyle background={background}>
      <ControlWrapperStyle>
        <ArrowControlStyle>
          <ArrowLeftSvg />
        </ArrowControlStyle>
        <TextWrapperStyle>
          <BannerTextStyle>
            {text}
          </BannerTextStyle>
          <TitleWrapperStyle>
            {title}
          </TitleWrapperStyle>
        </TextWrapperStyle>
        <ArrowControlStyle>
          <ArrowRightSvg />
        </ArrowControlStyle>
      </ControlWrapperStyle>
    </ContainerStyle>
  );
}

export default MainPromo;
