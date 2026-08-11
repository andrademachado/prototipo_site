import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from "./components/Banner"
import Header from "./components/Header"
import { GlobalCss } from "./styles"
import ProductsLists from './components/ProductsLists'

const rotas = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
        <Banner />
        <ProductsLists title={'Promoções'} background={'branco'} />
        <ProductsLists title={'Lançamentos'} background={'beige'} />

      </>
    )
  }
])

function App() {

  return (
    <>
      <GlobalCss/>
      <div className="container">
      <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
