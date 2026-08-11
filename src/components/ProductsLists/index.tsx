import Product from "../Product"
import { Container, List } from './styles'
import imgTeste from '../../assets/images/imgTeste2.png'

export type Props ={
    title: string
    background: 'beige' | 'branco'
}

const ProductsLists = ({ background, title}: Props) => (

        <Container background={background}>
        <div className="container">
        <h2>{title}</h2>
        <List >
            <Product title="titulo" description="texto" image={imgTeste}/>
            <Product title="titulo" description="texto" image={imgTeste} />
            <Product title="titulo" description="texto" image={imgTeste} />
            <Product title="titulo" description="texto" image={imgTeste} />
        </List >
        </div>
        </Container>
)

export default ProductsLists