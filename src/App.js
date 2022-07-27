import {
  About,
  Background,
  Blog,
  Cases,
  Contact,
  Container,
  Footer,
  Header,
  Hero,
  Team,
} from 'components';

function App() {
  return (
    <>
      <Background>
        <Container>
          <Header />
          <Hero />
        </Container>
      </Background>
      <Container>
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
