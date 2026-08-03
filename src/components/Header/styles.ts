import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    background-color: ${cores.branco};
    padding: 4px 0;
    margin-bottom: 30px;
`
export const Links = styled.ul`
    display: flex;
    gap: 48px;
    list-style: none;
    padding: 0;
`
export const LinkItem = styled.li`
    a{
        text-decoration: none;
        color:${cores.preto};
        font-size:20px;
        font-family:'Cormorant Garamond', serif;
        transition:.3s;

        &:hover{
            opacity:.5;
        }
    }
`
export const TopHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const NavBAR = styled.nav`
    margin-top: 20px;
    display: flex;
    justify-content: center;   
    
`

export const SearchForm = styled.form`
    position: relative;

    input {
        width: 550px;
        height: 40px;
        padding: 0 50px 0 20px;
        
        background-color: ${cores.branco};

        border: 1px solid #E6E6E6;
        border-radius: 30px;

        outline: none;

        font-size: 14px;
        text-align: center;

        /* Sombra */
        box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.04);

        transition: all .25s ease;

        &::placeholder {
            color: #A0A0A0;
        }

        &:focus {
            border-color: #D5D5D5;

            box-shadow:
                0 4px 14px rgba(0, 0, 0, 0.12),
                0 2px 6px rgba(0, 0, 0, 0.06);
        }

        // 👇 ALTERAÇÃO AQUI 👇 (Esconde o "X" nativo do navegador)
        &::-webkit-search-cancel-button {
            display: none;
        }
    }

    // 👇 ALTERAÇÃO AQUI 👇 (Adicionei a classe "lupa" para referenciar no CSS)
    .lupa {
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    // 👇 ALTERAÇÃO AQUI 👇 (Estilo do seu novo botão "X" vindo do Figma)
    .botao-limpar {
        position: absolute;
        top: 50%;
        right: 52px; /* Fica posicionado 52px da direita (antes da lupa) */
        transform: translateY(-50%);
        width: 18px;
        height: 18px;
        cursor: pointer;
        display: none; /* Fica invisível se não houver texto */
        z-index: 2;

        &.visivel {
            display: block; /* Fica visível quando houver texto */
        }
    }
`;