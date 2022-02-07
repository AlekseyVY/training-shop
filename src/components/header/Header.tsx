import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  ActionElementStyle,
  ActionMenuContainerStyle,
  AddressTextStyle, BottomBarContainerStyle, BottomInnerContainerStyle, CircleStyle,
  ElementWrapperStyle,
  HeaderStyle,
  LeftElementsContainerStyle, LinkStyle, LogoStyle, NavContainerStyle, RightElementsContainerStyle,
  SvgWrapperStyle,
  TopBarContainerStyle,
  TopBarStyle,
} from './Header.style';
import { ReactComponent as Phone } from '../../assets/svg/phone_1.svg';
import { ReactComponent as LocationMarkerSvg } from '../../assets/svg/location-marker_1.svg';
import { ReactComponent as ClockSvg } from '../../assets/svg/clock_1.svg';
import { ReactComponent as FacebookSvg } from '../../assets/svg/facebook_1.svg';
import { ReactComponent as TwitterSvg } from '../../assets/svg/logo-twitter_1.svg';
import { ReactComponent as InstagramSvg } from '../../assets/svg/instagram_1.svg';
import { ReactComponent as PinterestSvg } from '../../assets/svg/logo-pinterest_1.svg';
import { ReactComponent as SearchSvg } from '../../assets/svg/search_1.svg';
import { ReactComponent as GlobeSvg } from '../../assets/svg/globe_1.svg';
import { ReactComponent as UserSvg } from '../../assets/svg/user_1.svg';
import { ReactComponent as CartSvg } from '../../assets/svg/shopping-bag_2.svg';
import { NAV } from '../../constants/NAV';

function Header() {
  return (
    <HeaderStyle className="header" data-test-id="header">
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
                <LocationMarkerSvg />
              </SvgWrapperStyle>
              <p>Belarus, Gomel, Lange 17</p>
            </ElementWrapperStyle>
            <ElementWrapperStyle>
              <SvgWrapperStyle>
                <ClockSvg />
              </SvgWrapperStyle>
              <AddressTextStyle>All week 24/7</AddressTextStyle>
            </ElementWrapperStyle>
          </LeftElementsContainerStyle>
          <RightElementsContainerStyle>
            <SvgWrapperStyle>
              <FacebookSvg />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <TwitterSvg />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <InstagramSvg />
            </SvgWrapperStyle>
            <SvgWrapperStyle>
              <PinterestSvg />
            </SvgWrapperStyle>
          </RightElementsContainerStyle>
        </TopBarContainerStyle>
      </TopBarStyle>
      <BottomBarContainerStyle>
        <BottomInnerContainerStyle>
          <Link to="/" className="header-nav-logo" data-test-id="header-logo-link">
            <LogoStyle>CleverShop</LogoStyle>
          </Link>
          <NavContainerStyle className="menu" data-test-id="menu">
            {NAV.map((ele) => (
              <Link key={uuidv4()} to={`/${ele.link}`} className="menu-item" data-test-id={`menu-link-${ele.link}`}>
                <LinkStyle>
                  {ele.name}
                </LinkStyle>
              </Link>
            ))}
          </NavContainerStyle>
          <ActionMenuContainerStyle>
            <ActionElementStyle>
              <SearchSvg />
            </ActionElementStyle>
            <ActionElementStyle>
              <GlobeSvg />
            </ActionElementStyle>
            <ActionElementStyle>
              <UserSvg />
            </ActionElementStyle>
            <ActionElementStyle>
              <CartSvg />
              <CircleStyle>
                <p>2</p>
              </CircleStyle>
            </ActionElementStyle>
          </ActionMenuContainerStyle>
        </BottomInnerContainerStyle>
      </BottomBarContainerStyle>
    </HeaderStyle>
  );
}

export default Header;
