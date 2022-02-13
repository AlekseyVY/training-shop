import styled from 'styled-components';
import { sale, white } from '../../styles/color';

interface IProps {
  width: number;
  height: number;
  background: string;
  titleSize: number;
}

export const ContainerStyle = styled.div<IProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  font-size: ${(props) => `${props.titleSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleContainerStyle = styled.div`
  background-color: ${white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainerWithBannerStyle = styled.div`
  padding: 16px 24px;
  background-color: ${white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapperStyle = styled.h3`
  margin: 13px 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
`;

export const TitleWrapperWithBannerStyle = styled.h3`
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
`;

export const BannerStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-align: center;
  opacity: 0.6;
`;

export const PromoWrapperStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const PromoStyle = styled.span`
  margin-left: 5px;
  color: ${sale};
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-align: left;
  text-transform: uppercase;
`;
