import { v4 as uuidv4 } from 'uuid';
import {
  ContainerStyle,
  HeaderContainerStyle,
  NavContainerStyle,
  NavElementStyle, ProductCardsContainerStyle, SeeAllStyle,
  TitleStyle,
} from './MainGroup.style';
import ProductCard from '../productCard/ProductCard';
import { IMainGroupProps, IProduct } from '../../types/mainPage';
import { useAppDispatch } from '../../hooks/state';
import { addItem } from '../../store/reducers/cartReducer';

function MainGroup({ title, products }: IMainGroupProps) {
  const DATA = ['new arrivals', 'specials', 'bestsellers', 'most viewed', 'featured products'];
  const dispatch = useAppDispatch();
  const clickHandler = (ele: IProduct) => {
    console.log(ele);
    dispatch(addItem(ele));
  };
  return (
    <ContainerStyle>
      <HeaderContainerStyle>
        <TitleStyle>
          {title}
        </TitleStyle>
        <NavContainerStyle>
          {DATA.map((ele) => (
            <div key={uuidv4()}>
              <NavElementStyle>
                {ele}
              </NavElementStyle>
            </div>
          ))}
        </NavContainerStyle>
      </HeaderContainerStyle>
      <ProductCardsContainerStyle>
        {products.map((ele) => (
          <div
            onClick={() => clickHandler(ele)}
            onKeyPress={() => clickHandler(ele)}
            role="button"
            tabIndex={0}
            key={ele.id}
          >
            <ProductCard
              img={ele.img}
              title={ele.title}
              price={ele.price}
              rating={ele.rating}
              discount={ele.discount}
            />
          </div>
        ))}
      </ProductCardsContainerStyle>
      <SeeAllStyle>
        <p>see all</p>
      </SeeAllStyle>
    </ContainerStyle>
  );
}

export default MainGroup;
