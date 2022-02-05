import {
  AddressTextStyle,
  ElementWrapperStyle,
  HeaderStyle,
  LeftElementsContainerStyle, RightElementsContainerStyle,
  SvgWrapperStyle,
  TopBarContainerStyle,
  TopBarStyle,
} from './Header.style';
import { ReactComponent as Phone } from '../../assets/svg/phone_1.svg';
import { ReactComponent as LocationMarker } from '../../assets/svg/location-marker_1.svg';
import { ReactComponent as Clock } from '../../assets/svg/clock_1.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook_1.svg';
import { ReactComponent as Twitter } from '../../assets/svg/logo-twitter_1.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram_1.svg';
import { ReactComponent as Pinterest } from '../../assets/svg/logo-pinterest_1.svg';

function Header() {
  return (
    <HeaderStyle>
      <TopBarStyle>
        <TopBarContainerStyle>
          <LeftElementsContainerStyle>
            <ElementWrapperStyle>
              <SvgWrapperStyle>
                <Phone />
              </SvgWrapperStyle>
              <p>+375 29 100 20 30</p>
            </ElementWrapperStyle>
            <ElementWrapperStyle>
              <SvgWrapperStyle>
                <LocationMarker />
              </SvgWrapperStyle>
              <p>Belarus, Gomel, Lange 17</p>
            </ElementWrapperStyle>
            <ElementWrapperStyle>
              <SvgWrapperStyle>
                <Clock />
              </SvgWrapperStyle>
              <AddressTextStyle>All week 24/7</AddressTextStyle>
            </ElementWrapperStyle>
          </LeftElementsContainerStyle>
          <RightElementsContainerStyle>
            <SvgWrapperStyle>
              <Facebook />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <Twitter />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <Instagram />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <Pinterest />
            </SvgWrapperStyle>
          </RightElementsContainerStyle>
        </TopBarContainerStyle>
      </TopBarStyle>
    </HeaderStyle>
  );
}

export default Header;
