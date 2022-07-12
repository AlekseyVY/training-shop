import {
  ContainerStyle, DiscountContainerStyle, DiscountPriceStyle,
  DiscountStyle,
  ImageStyle,
  PriceStyle,
  RatingContainerStyle,
  TitleStyle,
} from './ProductCard.style';
import { IProduct } from '../../types/mainPage';

function ProductCard({
  img, title, price, rating, discount,
}: IProduct) {
  const calculatedPrice = Number(price) - ((Number(discount) / 100) * Number(price));

  return (
    <ContainerStyle>
      <ImageStyle src={img} alt={title} />
      {
        discount > 0
        && (
        <DiscountStyle>
          <p>{`-${discount}%`}</p>
        </DiscountStyle>
        )
      }
      <TitleStyle>
        {title}
      </TitleStyle>
      <RatingContainerStyle>
        {
          discount > 0
            ? (
              <DiscountContainerStyle>
                <PriceStyle>
                  {`$ ${calculatedPrice}`}
                </PriceStyle>
                <DiscountPriceStyle>
                  {`$ ${price}`}
                </DiscountPriceStyle>
              </DiscountContainerStyle>
            )
            : (
              <PriceStyle>
                {`$ ${price}`}
              </PriceStyle>
            )

        }
        <div>
          <img src={rating} alt={title} />
        </div>
      </RatingContainerStyle>
    </ContainerStyle>
  );
}

export default ProductCard;
