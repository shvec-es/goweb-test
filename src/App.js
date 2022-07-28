import {
  About,
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
      <Header />
      <Hero />
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
