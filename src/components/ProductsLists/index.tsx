import Product from "../Product"
import { Container, List } from './styles'

import type Site from "../../models/site"

export type Props ={
    title: string
    background: 'beige' | 'branco'
    sites: Site[]
}

const ProductsLists = ({ background, title,sites}: Props) => (

        <Container background={background}>
        <div className="container">
        <h2>{title}</h2>
        <List >
            {sites.map(site =>(

            <Product 
            key={site.id}
            title={site.title}
            description={site.description} 
            image={site.image}
            />
            ))}
            
        </List >
        </div>
        </Container>
)

export default ProductsLists