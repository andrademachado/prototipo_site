import imgTeste from '../../assets/images/imgTeste2.png'
import { Card, Descricao, Titulo } from './style'

const Product = () => (
<Card>    
        <img src={imgTeste} width={220} height={250}/>
        <Titulo >Texto</Titulo >
        <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nihil consequuntur voluptatum impedit provident, ullam officiis <br />
            reiciendis corrupti ad asperiores magni quod voluptatem quidem<br />
            aut adipisci repellendus facilis, laborum quas aliquid.
        </Descricao>
</Card>

)

export default Product