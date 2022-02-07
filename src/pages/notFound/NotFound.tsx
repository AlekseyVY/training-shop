import { Container } from './NotFound.style';
import Header from '../../components/header/Header';

function NotFound() {
  return (
    <Container>
      <Header />
      <h1>
        Page Not Found!
      </h1>
    </Container>
  );
}

export default NotFound;
