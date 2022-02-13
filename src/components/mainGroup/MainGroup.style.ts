import styled from 'styled-components';
import { grWhite } from '../../styles/color';

export const ContainerStyle = styled.section`
  max-width: 1110px;
  width: 100%;
  margin: 96px auto 0;
`;

export const HeaderContainerStyle = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyle = styled.h3`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.06em;
  text-align: left;
  text-transform: uppercase;
`;

export const NavContainerStyle = styled.div`
  max-width: 663px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavElementStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-align: right;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductCardsContainerStyle = styled.div`
  width: 100%;
  margin: 48px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const SeeAllStyle = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${grWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
