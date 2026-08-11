import { Card, Descricao, Titulo } from './style'

type Props = {
    title:string;
    description:string;
    image:string
}

const Product = ({title, description, image}:Props) => (
<Card>    
        <img src={image} width={220} height={250} alt={title}/>
        <Titulo >{title}</Titulo >
        <Descricao>{description}</Descricao>
</Card>

)

export default Product