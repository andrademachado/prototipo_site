import { useState } from 'react'
import { HeaderBar, Links, LinkItem, TopHeader, NavBAR, SearchForm } from './styles'
import { Container } from '../../styles'
import logo from '../../assets/images/Logo.png'
import zap from '../../assets/images/zap.svg'
import lupa from '../../assets/images/lupa.svg'
import close from '../../assets/images/close1.svg'

const Header = () => {
    const [busca, setBusca] = useState('')
    const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <HeaderBar>
            <Container >
                {/* TopHeader (No Desktop, o menu não ocupa espaço. No Mobile, ele fica na esquerda) */}
                <TopHeader >
                    {/* 1. Menu Hambúrguer (Agora faz parte da linha superior) */}
                    <div
                        className='menu-Hamburguer'
                        onClick={toggleMenu}
                        role="button"
                        aria-label="Abrir menu"
                        tabIndex={0}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href='#' className='logo-link'>

                    <img src={logo} alt="Logo da 'nome da empresa'" width={55} height={55} />
                    </a>
                    <SearchForm role='search' >
                        <input
                            type="search"
                            placeholder='Pesquisar'
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                        <div
                            className={`botao-limpar ${busca.length > 0 ? 'visivel' : ''}`}
                            onClick={() => setBusca('')}
                        >
                            <img src={close} alt="Limpar busca" className="icone-close" width={12} height={12} />
                        </div>
                        <img
                            className="lupa"
                            src={lupa}
                            alt="Pesquisar"
                        />
                    </SearchForm>

                    {/* 4. Ícone do Zap (No Mobile, fica na direita) */}
                    <a
                        href="https://wa.me/5531999999999?text=Estou%20vindo%20do%20site%20e%20quero%20mais%20informações."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Conversar pelo WhatsApp"
                    >
                        <img src={zap} alt="WhatsApp" width={30} height={30} />
                    </a>
                </TopHeader >

                {/* Menu de Navegação (Categorias) */}
                <NavBAR className={menuAberto ? 'is-open' : ''}>
                    <Links className={menuAberto ? 'is-open' : ''}>
                        <LinkItem>
                            <a href="#">Categoria 1</a>
                        </LinkItem>
                        <LinkItem>
                            <a href="#">Categoria 2</a>
                        </LinkItem>
                        <LinkItem>
                            <a href="#">Categoria 3</a>
                        </LinkItem>
                    </Links>
                </NavBAR>
            </Container>
        </HeaderBar>
    )
}

export default Header