import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    background-color: ${cores.branco};
    padding: 4px 0;
    margin-bottom: 30px;

    .menu-Hamburguer {
        width: 32px;
        cursor: pointer;
        display: none;

        span {
            height: 2px;
            width: 100%;
            background-color: ${cores.preto};
            display: block;
            margin-bottom: 4px;
            transition: all .3s ease;
        }

        @media (max-width: 1023px) {
            display: block;
        }
    }
    @media (max-width: 1023px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const Links = styled.ul`
    display: flex;
    gap: 48px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 1023px) {
        display: none;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        text-align: center;
        padding: 15px 0;

        &.is-open {
            display: flex;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        gap: 24px;
        padding: 20px 0;
    }
`;

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
`;

export const TopHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1023px) {
        flex-wrap: wrap;
        & > .menu-Hamburguer { order: 1; }
        & > img { order: 2; }
        & > a { order: 3; }
        & > form {
            order: 4;
            width: 100%;
            max-width: 400px;
            margin: 16px auto 0;
            display: block;
        }
    }

    /* CORREÇÃO EXCLUSIVA PARA TABLET (768px - 1023px) */
    @media (min-width: 563px) and (max-width: 1023px) {
        display: grid !important;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: auto auto;
        align-items: center;
        justify-items: center;

        & > .menu-Hamburguer {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            justify-self: start;
        }
        & > .logo-link {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            justify-self: center;
        }
        & > a {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            justify-self: end;
        }
        & > form {
            grid-column: 1 / 4;
            grid-row: 2 / 3;
            width: 100%;
            max-width: 600px;
            margin: 16px auto 0;
            display: block;
        }
    }
`;

export const NavBAR = styled.nav`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 1023px) {
        margin-top: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        transition: all .25s ease;

        &::placeholder { color: #A0A0A0; }

        &:focus {
            border-color: #D5D5D5;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        &::-webkit-search-cancel-button { display: none; }
    }

    .lupa {
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .botao-limpar {
        position: absolute;
        top: 50%;
        right: 52px;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        cursor: pointer;
        display: none;
        z-index: 2;

        &.visivel { display: block; }
        .icone-close { width: 100%; height: 100%; display: block; }
    }

    /* Tablet e mobile: input ocupa 100% do formulário */
    @media (max-width: 1023px) {
        input {
            width: 100%;
            max-width: 100%;
        }
    }
`;