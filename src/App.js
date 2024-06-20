import Card from 'react-bootstrap/Card';
import './App.css';
import Container from 'react-bootstrap/Container';
import Name from './components/Name';
import Image from './components/Image';
import Description from './components/Description';
import Price from './components/Price';


function App() {
  return (
    <>
      <Container className='mt-10'>
        <Card>
          <Card.Img variant="top" src="https://c1.neweggimages.com/ProductImageCompressAll1280/34-269-132-V04.jpg" width={151}
            height={580} />
          <Card.Body>

            <Name />
            <Description />
            <Price />
          </Card.Body>
        </Card>
      </Container>

    </>
  );
}

export default App;
