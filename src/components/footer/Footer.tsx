import { v4 as uuidv4 } from 'uuid';
import {
  CategoryGroupWrapperStyle,
  ContainerStyle,
  FooterBottomInnerContainerStyle, FooterBottomLinkStyle,
  FooterCategoryLinkStyle,
  FooterCopyrightStyle,
  FooterImageStyle,
  FooterLinkContainerStyle,
  FooterLinksCategoryTitleStyle,
  FooterLinksGroupStyle,
  FormButtonStyle,
  FormInputStyle,
  FormWrapperStyle,
  FotterBottomContainerStyle,
  InnerSocialContainer, PaymentsGroupStyles,
  SocialContainer,
  SocialTitleStyle,
  SvgWrapperStyle,
} from './Footer.style';
import { RightElementsContainerStyle } from '../header/Header.style';
import { ReactComponent as FacebookSvg } from '../../assets/svg/facebook_1.svg';
import { ReactComponent as TwitterSvg } from '../../assets/svg/logo-twitter_1.svg';
import { ReactComponent as InstagramSvg } from '../../assets/svg/instagram_1.svg';
import { ReactComponent as PinterestSvg } from '../../assets/svg/logo-pinterest_1.svg';
import location from '../../assets/png/loc1.png';
import phone from '../../assets/png/phone1.png';
import clock from '../../assets/png/clock1.png';
import mail from '../../assets/png/mail1.png';
import stripe from '../../assets/png/Stripe_x42.png';
import aes from '../../assets/png/AES256_x42.png';
import paypal from '../../assets/png/paypal_2_x42.png';
import visa from '../../assets/png/visa_x42.png';
import mastercard from '../../assets/png/mastercard_x42.png';
import discover from '../../assets/png/discover_x42.png';
import express from '../../assets/png/american-express_x42.png';

function Footer() {
  const CATEGORIES = ['Men', 'Women', 'Accessories', 'Beauty'];
  const INFORMATION = ['About Us', 'Contact Us', 'Blog', 'FAQs'];
  const USEFUL_LINKS = ['Terms & Conditions', 'Returns & Exchanges', 'Shipping & Delivery', 'Privacy Policy'];
  const CONTACT_US = ['Belarus, Gomel, Lange 17', '+375 29 100 20 30', 'All week 24/7', 'info@clevertec.ru'];
  const IMAGES = [location, phone, clock, mail];
  const PAYMENTS = [stripe, aes, paypal, visa, mastercard, discover, express];

  return (
    <ContainerStyle>
      <SocialContainer>
        <InnerSocialContainer>
          <SocialTitleStyle>
            be in touch with us:
          </SocialTitleStyle>
          <FormWrapperStyle>
            <FormInputStyle
              placeholder="Enter your email"
            />
            <FormButtonStyle type="submit">
              join us
            </FormButtonStyle>
          </FormWrapperStyle>
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
        </InnerSocialContainer>
      </SocialContainer>
      <FooterLinksGroupStyle>
        <CategoryGroupWrapperStyle>
          <FooterLinksCategoryTitleStyle>
            categories
          </FooterLinksCategoryTitleStyle>
          {CATEGORIES.map((ele) => (
            <FooterCategoryLinkStyle key={uuidv4()} href="#" target="_blank">
              {ele}
            </FooterCategoryLinkStyle>
          ))}
        </CategoryGroupWrapperStyle>
        <CategoryGroupWrapperStyle>
          <FooterLinksCategoryTitleStyle>
            information
          </FooterLinksCategoryTitleStyle>
          {INFORMATION.map((ele) => (
            <FooterCategoryLinkStyle key={uuidv4()} href="#" target="_blank">
              {ele}
            </FooterCategoryLinkStyle>
          ))}
        </CategoryGroupWrapperStyle>
        <CategoryGroupWrapperStyle>
          <FooterLinksCategoryTitleStyle>
            useful links
          </FooterLinksCategoryTitleStyle>
          {USEFUL_LINKS.map((ele) => (
            <FooterCategoryLinkStyle key={uuidv4()} href="#" target="_blank">
              {ele}
            </FooterCategoryLinkStyle>
          ))}
        </CategoryGroupWrapperStyle>
        <CategoryGroupWrapperStyle>
          <FooterLinksCategoryTitleStyle>
            contact us
          </FooterLinksCategoryTitleStyle>
          {CONTACT_US.map((ele, idx) => (
            <FooterLinkContainerStyle key={uuidv4()}>
              <FooterImageStyle src={IMAGES[idx]} alt={ele} />
              <FooterCategoryLinkStyle href="#" target="_blank">
                {ele}
              </FooterCategoryLinkStyle>
            </FooterLinkContainerStyle>
          ))}
        </CategoryGroupWrapperStyle>
      </FooterLinksGroupStyle>
      <FotterBottomContainerStyle>
        <FooterBottomInnerContainerStyle>
          <FooterCopyrightStyle>
            Copyright © 2032 all rights reserved
          </FooterCopyrightStyle>
          <PaymentsGroupStyles>
            {PAYMENTS.map((ele) => (
              <div key={uuidv4()}>
                <img src={ele} alt="payment method" />
              </div>
            ))}
          </PaymentsGroupStyles>
          <FooterBottomLinkStyle href="Clevertec.ru/training" target="_blank">
            Clevertec.ru/training
          </FooterBottomLinkStyle>
        </FooterBottomInnerContainerStyle>
      </FotterBottomContainerStyle>
    </ContainerStyle>
  );
}

export default Footer;
