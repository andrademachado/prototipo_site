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

`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    margin-top: 40px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`