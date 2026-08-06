import Banner from "./components/Banner"
import Header from "./components/Header"
import { GlobalCss, Container } from "./styles"

function App() {

  return (
    <>
      <GlobalCss/>
      <Container>
      <Header />
      </Container>
      <Banner />
    </>
  )
}

export default App
