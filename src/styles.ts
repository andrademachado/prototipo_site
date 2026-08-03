import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#ffff',
    preto:'#000',
    cinza:'#D9D9D9',
    verde:'#10AC84'
}

export const GlobalCss =  createGlobalStyle `
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family:  Roboto, sans-serif;
        list-style: none;
        text-decoration: none;

        body {
            background-color:${cores.branco};
            color: ${cores.preto};
            padding-top: 10px;            
        }
}
`
export const Container = styled.div`
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
`