import styled from 'styled-components';
import { transparentDarkShadow, white } from '../../styles/color';

interface IBackground{
  background: string;
}

export const ContainerStyle = styled.div<IBackground>`
  max-width: 540px;
  width: 100%;
  height: 490px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ControlWrapperStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 4px;
`;

export const TitleWrapperStyle = styled.h3`
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.06em;
  text-align: left;

`;

export const TextWrapperStyle = styled.div`
  width: 289px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  text-transform: uppercase;
`;

export const BannerTextStyle = styled.p`
  color: ${transparentDarkShadow};
  opacity: 0.4;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-align: left;
  margin-bottom: 14px;
`;

export const ArrowControlStyle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${white};
  &:hover {
    cursor: pointer;
  }
`;
