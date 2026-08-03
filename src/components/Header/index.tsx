import { useState } from 'react'
import { HeaderBar, Links, LinkItem, TopHeader, NavBAR, SearchForm } from './styles'
import { Container } from '../../styles'
import logo from '../../assets/images/Logo.png'
import zap from '../../assets/images/zap.svg'
import lupa from '../../assets/images/lupa.svg'

const Header = () => {
    const [busca, setBusca] = useState('')

    return (
        <HeaderBar>
            <Container >
                <TopHeader >
                    <img src={logo} alt="Logo da 'nome da empresa'" width={55} height={55} />
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
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#A0A0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <img
                            className="lupa"
                            src={lupa}
                            alt="Pesquisar"
                        />
                    </SearchForm>
                    <a
                        href="https://wa.me/5531999999999?text=Estou%20vindo%20do%20site%20e%20quero%20mais%20informações."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Conversar pelo WhatsApp"
                    >
                        <img src={zap} alt="WhatsApp" width={30} height={30} />
                    </a>
                </TopHeader >
                <NavBAR>
                    <Links>
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