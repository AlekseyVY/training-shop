import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import MainGroup from '../../components/mainGroup/MainGroup';
import { WOMEN_PRODUCTS } from '../../data/womanMainProducts';
import { MEN_PRODUCTS } from '../../data/menMainProducts';

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <MainGroup title={'women\'s'} products={WOMEN_PRODUCTS} />
      <MainGroup title={'men\'s'} products={MEN_PRODUCTS} />
    </>
  );
}

export default Main;
