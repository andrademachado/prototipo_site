import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
    background-color: ${cores.branco};
    padding: 32px 0;
    
`
export const NavBAR = styled.nav`
    display: block;
    margin-top: 20px;
`
export const Info = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Cop = styled.div`
    margin-top: 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const Escudo = styled.div`
    display: flex;
    flex-direction: column;    /* empilha verticalmente */
    align-items: center;       /* centraliza horizontalmente */

    div {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 16px;       /* (opcional) espaçamento entre a logo e o texto */
    }

`

export const Redes = styled.div`
    display: flex;
    flex-direction: column;   
    align-items: flex-start; 

    .icones {
        display: flex;
        gap: 30px; 
        margin-top: 8px;      
    }
`

