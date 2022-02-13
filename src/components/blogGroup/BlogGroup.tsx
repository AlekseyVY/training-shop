import {
  BlogsContainerStyle, ContainerStyle, HeaderContainerStyle, TextStyle, TitleStyle,
} from './BlogGroup.style';
import { BLOG_DATA } from '../../data/blogData';
import BlogCard from '../blogCard/BlogCard';

function BlogGroup() {
  return (
    <ContainerStyle>
      <HeaderContainerStyle>
        <TitleStyle>
          latest from blog
        </TitleStyle>
        <TextStyle>
          see all
        </TextStyle>
      </HeaderContainerStyle>
      <BlogsContainerStyle>
        {BLOG_DATA.map((ele) => (
          <div key={ele.id}>
            <BlogCard
              img={ele.img}
              title={ele.title}
              text={ele.text}
            />
          </div>
        ))}
      </BlogsContainerStyle>
    </ContainerStyle>
  );
}

export default BlogGroup;
