import { Routes, Route } from 'react-router-dom';
import { ContainerStyle } from './App.style';
import { Cart } from './components/cart/cart';
import Main from './pages/main/Main';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <ContainerStyle className="app" data-test-id="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/women" element={<NotFound />} />
        <Route path="/men" element={<NotFound />} />
        <Route path="/beauty" element={<NotFound />} />
        <Route path="/accessories" element={<NotFound />} />
        <Route path="/blog" element={<NotFound />} />
        <Route path="/contact" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ContainerStyle>
  );
}

export default App;
