import styled from 'styled-components';
import { black, grWhite, white } from '../../styles/color';

export const ContainerStyle = styled.section`
  width: 100%;
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${black};
`;

export const InnerSocialContainer = styled.div`
  width: 1110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialTitleStyle = styled.h3`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-align: left;
  text-transform: uppercase;
  color: ${white};
`;

export const FormWrapperStyle = styled.form`
  max-width: 520px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
`;

export const FormInputStyle = styled.input`
  max-width: 400px;
  width: 100%;
  height: 32px;
  background-color: ${white};
  opacity: 0.4;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  padding-left: 16px;
`;

export const FormButtonStyle = styled.button`
  width: 108px;
  height: 32px;
  border: 1px solid ${white};
  background-color: ${black};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  color: ${white};
  &:hover {
    cursor: pointer;
  }
`;

export const SvgWrapperStyle = styled.div`
  fill: ${white};
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const FooterLinksGroupStyle = styled.div`
  max-width: 1110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  margin: 40px auto;
`;

export const FooterLinksCategoryTitleStyle = styled.h3`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-align: left;
  text-transform: uppercase;
`;

export const CategoryGroupWrapperStyle = styled.div`
  max-width: 255px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
`;

export const FooterCategoryLinkStyle = styled.a`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
`;

export const FooterLinkContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterImageStyle = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 11px;
`;

export const FotterBottomContainerStyle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${grWhite};
`;

export const FooterBottomInnerContainerStyle = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCopyrightStyle = styled.h4`
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
`;

export const FooterBottomLinkStyle = styled.a`
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
  text-align: right;
  opacity: 0.8;
  text-decoration-line: underline;
`;

export const PaymentsGroupStyles = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: space-between;
`;
