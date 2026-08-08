import styled from "styled-components";
import { Link } from 'react-router-dom'
import { cores } from "../../styles";


export const ButtonContainer = styled.button`
    border: 2px solid ${cores.branco};
    color:${cores.branco} ;
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
`
export const BotaoSecundario = styled(ButtonContainer)`
    background-color: red;
`


export const  ButtonLink = styled(Link)`
    border: 2px solid ${cores.branco};
    color:${cores.branco} ;
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;

`