import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import MainGroup from '../../components/mainGroup/MainGroup';
import { WOMEN_PRODUCTS } from '../../data/womanMainProducts';
import { MEN_PRODUCTS } from '../../data/menMainProducts';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import { PROMO_DATA } from '../../data/middlePromo';
import { PromoContainerStyle } from './Main.style';
import SubscribePromo from '../../components/subscribePromo/SubscribePromo';
import BlogGroup from '../../components/blogGroup/BlogGroup';

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <MainGroup title={'women\'s'} products={WOMEN_PRODUCTS} />
      <MainGroup title={'men\'s'} products={MEN_PRODUCTS} />
      <PromoContainerStyle>
        {PROMO_DATA.map((ele) => (
          <div key={uuidv4()}>
            <CategoryCard
              width={ele.width}
              height={ele.height}
              background={ele.background}
              title={ele.title}
              banner={ele.banner}
              promo={ele.promo}
              titleSize={ele.titleSize}
            />
          </div>
        ))}
      </PromoContainerStyle>
      <SubscribePromo />
      <BlogGroup />
    </>
  );
}

export default Main;
