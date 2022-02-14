import styled from 'styled-components';
import { white } from '../../styles/color';

export const ContainerStyle = styled.div`
  max-width: 350px;
  width: 100%;
  height: 342px;
  position: relative;
`;

export const InnerContainerStyle = styled.div`
  position: absolute;
  width: 302px;
  height: 122px;
  bottom: -60px;
  left: 50%; /* Position X halfway in */
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  background-color: ${white};
`;

export const TitleStyle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 24px 0 0 16px;
`;

export const TextStyle = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.8;
  margin: 12px 16px 0;
`;
