import { Link } from 'react-router-dom'
import { Container, NavBAR, Info, Cop, Escudo, Redes } from "./styles"
import logo from '../../assets/images/Logo.png'
import escudo from '../../assets/images/escudo.png'
import insta from '../../assets/images/insta.png'
import zap from '../../assets/images/zap.svg'



const Footer = () => (
    <Container className="container">
        <Info >
            <NavBAR>
                <h4>Categorias</h4>
                <ul>
                    <li><Link to="/categoria1">Categoria 1</Link></li>
                    <li><Link to="/categoria2">Categoria 2</Link></li>
                    <li><Link to="/categoria3">Categoria 3</Link></li>
                </ul>
            </NavBAR>                   
            <Escudo>
                <a href='#' className='logo-link'>
                    <img src={logo} alt="Logo da 'nome da empresa'" width={70} height={70} />
                </a>
                    <div>
                        <h4>Este site é blindado</h4>
                        <img src={escudo} alt="selo de segurança" width={20} height={25} />
                    </div>
            </Escudo>
            <Redes>
                <h4>Redes Sociais</h4>
                <div className="icones">   {/* container para os ícones */}
                    <img src={insta} alt="Instagram" width={30} height={30} />
                    <img src={zap} alt="WhatsApp" width={30} height={30} />
                </div>
            </Redes>
        </Info>
        <Cop>
            <p>2023 - &copy; Site Todos os direitos reservados</p>
            <img src={logo} alt="logo da empresa" width={55} height={55} />
        </Cop>        
    </Container>
)

export default Footer