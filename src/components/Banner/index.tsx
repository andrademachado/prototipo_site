import { Imagem, Paragrafo, Titulo } from './styles'
import bannerImg from '../../assets/images/Banner1.png'

const Banner = () => (
    <Imagem style={{ backgroundImage: `url(${bannerImg})`}}>
        <div className='container' >
        <Titulo>Texto Banner 1</Titulo>
            <Paragrafo>
            Parágrafo <br />
            subparágrafo
            </Paragrafo>
        </div>
    </Imagem>
)

export default Banner