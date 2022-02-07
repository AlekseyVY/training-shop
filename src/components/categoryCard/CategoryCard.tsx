import { ContainerStyle, TitleContainerStyle, TitleWrapperStyle } from './CategoryCard.style';

interface ICategoryCard {
  width: number;
  height: number;
  background: string;
  title: string;
  banner: string | null;
}

function CategoryCard({
  width, height, background, title, banner,
}: ICategoryCard) {
  return (
    <ContainerStyle width={width} height={height} background={background}>
      {banner
        ? (
          <TitleContainerStyle>
            <p>
              {banner}
            </p>
            <TitleWrapperStyle>
              {title}
            </TitleWrapperStyle>
          </TitleContainerStyle>
        )
        : (
          <TitleContainerStyle>
            <TitleWrapperStyle>
              {title}
            </TitleWrapperStyle>
          </TitleContainerStyle>
        )}
    </ContainerStyle>
  );
}

export default CategoryCard;
