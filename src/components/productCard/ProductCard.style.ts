import styled from 'styled-components';
import { sale, white } from '../../styles/color';

export const ContainerStyle = styled.div`
  width: 255px;
  height: 378px;
  position: relative;
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: 318px;
`;

export const TitleStyle = styled.p`
  margin: 16px 0 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
`;

export const RatingContainerStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceStyle = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
`;

export const DiscountStyle = styled.div`
  width: 53px;
  height: 31px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: ${sale};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0;
  text-align: center;
  color: ${white};
`;

export const DiscountContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const DiscountPriceStyle = styled.p`
  margin-left: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.4;
  text-decoration: line-through;
`;
