import Product from "../Product"
import { Container, List } from './styles'

type Props ={
    title: string
    background: 'beige' | 'gray'
}

const ProductsLists = ({ background, title}: Props) => (
    <>
        <Container>
        <div className="container">
        <h2>{title}</h2>
        <List >
            <Product />
            <Product />
            <Product />
            <Product />
        </List >
        </div>
        </Container>
    </>
)

export default ProductsLists