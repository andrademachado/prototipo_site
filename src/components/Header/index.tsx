// src/components/Header/index.tsx

import { Link, useNavigate, useLocation } from 'react-router-dom'; // ← ADICIONEI useNavigate e useLocation
import { useState } from 'react';
import { HeaderBar, Links, LinkItem, TopHeader, NavBAR, SearchForm } from './styles';
import logo from '../../assets/images/Logo.png';
import zap from '../../assets/images/zap.svg';
import lupa from '../../assets/images/lupa.svg';
import close from '../../assets/images/close1.svg';

// ============================================================
// IMPORTE A FUNÇÃO DE BUSCA DO searchIndex.ts
// ============================================================
import { findDestination } from '../../config/searchIndex';

const Header = () => {
    // --- ESTADOS EXISTENTES (mantidos) ---
    const [busca, setBusca] = useState('');
    const [menuAberto, setMenuAberto] = useState(false);

    // --- HOOKS DO REACT ROUTER (NOVOS) ---
    const navigate = useNavigate();
    const location = useLocation();

    // --- FUNÇÃO EXISTENTE (mantida) ---
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    // ============================================================
    // FUNÇÃO PRINCIPAL DE BUSCA (NOVA)
    // ============================================================
    const handleSearch = () => {
        const termo = busca.trim();
        if (!termo) return; // se o campo estiver vazio, não faz nada

        // Procura a palavra no índice
        const destino = findDestination(termo);

        if (destino) {
            const { path, anchor } = destino;

            // Verifica se já estamos na página correta
            if (location.pathname === path) {
                // Mesma página: rola suavemente até a âncora
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Página diferente: navega com a âncora na URL
                navigate(`${path}#${anchor}`);
            }
        } else {
            // Palavra não encontrada: exibe alerta (ou redirecione para 404)
            alert(`Nenhum resultado encontrado para "${termo}"`);
            // Opcional: navigate('/nao-encontrado');
        }

        // (Opcional) Limpa o campo após a busca – descomente se quiser
        // setBusca('');
    };

    // ============================================================
    // JSX (MANTIDO EXATAMENTE IGUAL, APENAS CONECTAMOS handleSearch)
    // ============================================================
    return (
        <HeaderBar className='container'>
            <>
                {/* TopHeader (No Desktop, o menu não ocupa espaço. No Mobile, ele fica na esquerda) */}
                <TopHeader>
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

                    {/* 
                        FORMULÁRIO DE BUSCA – adicionamos onSubmit e 
                        conectamos a lupa ao handleSearch 
                    */}
                    <SearchForm
                        role='search'
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearch();
                        }}
                    >
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
                            onClick={handleSearch} // ← CONECTADO
                            style={{ cursor: 'pointer' }}
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
                </TopHeader>

                {/* Menu de Navegação (Categorias) */}
                <NavBAR className={menuAberto ? 'is-open' : ''}>
                    <Links className={menuAberto ? 'is-open' : ''}>
                        <LinkItem>
                            <Link to="/categoria1">Categoria 1</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to="/categoria2">Categoria 2</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to="/categoria3">Categoria 3</Link>
                        </LinkItem>
                    </Links>
                </NavBAR>
            </>
        </HeaderBar>
    );
};

export default Header;