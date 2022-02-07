import styled from 'styled-components';
import { white } from '../../styles/color';

interface IProps {
  width: number;
  height: number;
  background: string;
}

export const ContainerStyle = styled.div<IProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
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
`;

export const TitleWrapperStyle = styled.h3`
  margin: 13px 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
`;
