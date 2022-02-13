import { IBlogCardProps } from '../../types/mainPage';
import {
  ContainerStyle, InnerContainerStyle, TextStyle, TitleStyle,
} from './BlogCard.style';

function BlogCard({ img, title, text }: IBlogCardProps) {
  return (
    <ContainerStyle>
      <img src={img} alt={title} />
      <InnerContainerStyle>
        <TitleStyle>
          {title}
        </TitleStyle>
        <TextStyle>
          {text}
        </TextStyle>
      </InnerContainerStyle>
    </ContainerStyle>
  );
}

export default BlogCard;
