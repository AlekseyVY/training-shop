import {
  BannerStyle,
  ContainerStyle, PromoStyle, PromoWrapperStyle,
  TitleContainerStyle, TitleContainerWithBannerStyle,
  TitleWrapperStyle,
  TitleWrapperWithBannerStyle,
} from './CategoryCard.style';
import { ICategoryCard } from '../../types/mainPage';

function CategoryCard({
  width, height, background, title, banner, promo, titleSize = 14,
}: ICategoryCard) {
  if (promo) {
    return (
      <ContainerStyle width={width} height={height} background={background} titleSize={titleSize}>
        { banner
          ? (
            <TitleContainerWithBannerStyle>
              <BannerStyle>
                { banner }
              </BannerStyle>
              <PromoWrapperStyle>
                <TitleWrapperWithBannerStyle>
                  { title }
                </TitleWrapperWithBannerStyle>
                <PromoStyle>
                  { promo }
                </PromoStyle>
              </PromoWrapperStyle>
            </TitleContainerWithBannerStyle>
          )
          : (
            <TitleContainerStyle>
              <TitleWrapperStyle>
                { title }
              </TitleWrapperStyle>
            </TitleContainerStyle>
          ) }
      </ContainerStyle>
    );
  }
  return (
    <ContainerStyle width={width} height={height} background={background} titleSize={titleSize}>
      { banner
        ? (
          <TitleContainerWithBannerStyle>
            <BannerStyle>
              { banner }
            </BannerStyle>
            <TitleWrapperWithBannerStyle>
              { title }
            </TitleWrapperWithBannerStyle>
          </TitleContainerWithBannerStyle>
        )
        : (
          <TitleContainerStyle>
            <TitleWrapperStyle>
              { title }
            </TitleWrapperStyle>
          </TitleContainerStyle>
        ) }
    </ContainerStyle>
  );
}

export default CategoryCard;
