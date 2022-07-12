import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { removeItem } from '../../store/reducers/cartReducer';
import { IProduct } from '../../types/mainPage';
import Header from '../header/Header';
import ProductCard from '../productCard/ProductCard';
import { Container, ProductCardsContainerStyle } from './cart.styles';

export function Cart() {
  // const [data, setData] = useState([]);

  const cartData = useAppSelector(({ cart }) => cart.value);

  const dispatch = useAppDispatch();
  const clickHandler = (ele: IProduct) => {
    dispatch(removeItem(ele.id as string));
  };
  const priceToPayToHaronToPassToOtherBankOfStycx = cartData
    .reduce((acc, curr) => acc + Number(curr.price), 0);
  return (
    <Container>
      <Header />
      <h1>{`${priceToPayToHaronToPassToOtherBankOfStycx} - Dallars`}</h1>
      <ProductCardsContainerStyle>
        {cartData.map((ele) => (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => clickHandler(ele)}
            onClick={() => clickHandler(ele)}
            key={uuidv4()}
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
    </Container>
  );
}
