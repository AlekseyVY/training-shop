import styled from 'styled-components';
import { grWhite } from '../../styles/color';

export const MainContainerStyle = styled.section`
  width: 100%;
  border-bottom: 2px solid ${grWhite};
`;

export const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 32px auto 0;
  position: relative;
`;

export const HeroWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BannersContainerStyle = styled.div`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 30px;
  justify-content: space-between;
`;

export const AdventContainerStyle = styled.div`
  width: 100%;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdventElementContainerStyle = styled.div`
  max-width: 350px;
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdventTextWrapperStyle = styled.div`
  max-width: 302px;
  width: 100%;
  text-align: left;
  font-style: normal;
  font-size: 12px;
`;

export const AdventTitleStyle = styled.h4`
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const AdventTextStyle = styled.p`
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
`;
