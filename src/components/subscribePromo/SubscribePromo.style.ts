import styled from 'styled-components';
import {
  black, grWhite, sale, white,
} from '../../styles/color';

export const Container = styled.section`
  width: 100%;
  height: 580px;
  margin: 96px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 532px;
  width: 100%;
  height: 461px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  border-radius: 4px;
`;

export const TitleStyle = styled.h3`
  margin-bottom: 16px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-align: center;
  opacity: 0.4;
`;

export const TextWrapperStyle = styled.div`
  display: flex;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
`;

export const TopTextStyle = styled.h4`
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
`;

export const PromoTextStyle = styled.span`
  margin-left: 5px;
  color: ${sale};
`;

export const FormWrapperStyle = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  box-sizing: border-box;
  width: 340px;
  height: 64px;
  margin-bottom: 24px;
  background-color: ${grWhite};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  box-sizing: border-box;
  width: 340px;
  height: 64px;
  background-color: ${black};
  color: ${white};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
`;

export const WomenStyle = styled.img`
  position: absolute;
  bottom: -97px;
  left: -265px;
`;

export const MenStyle = styled.img`
  position: absolute;
  bottom: -40px;
  right: -200px;
`;
