import styled from "styled-components";

import type { Props } from '.'
import { cores } from '../../styles'
import { Card } from "../Product/style";

export const Container = styled.section<Omit<Props, 'title'>>`
    padding: 32px 0;
    background-color: ${(props) =>
    props.background === 'beige' ? cores.bege : cores.branco};

    ${Card}{
        background-color: ${(props) =>
        props.background === 'beige' ? cores.branco : cores.bege};        
    }
    @media (max-width: 1023px) {
        margin-bottom: 24px;
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    margin-top: 40px;

    @media (max-width: 1023px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 24px;    /* mesmo gap do desktop */
        margin-top: 24px;    /* um pouco menor que desktop */
        row-gap: 24px;       /* espaço entre as linhas */
    }   
    
    @media (min-width: 375px) and (max-width: 563px){
        grid-template-columns: 1fr ;
    }
    
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`