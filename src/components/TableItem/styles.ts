

import styled from "styled-components";


export const TableLine = styled.tr``

export const TableColumn = styled.td`
padding: 15px 0 15px ;


`
// Criando estilização dinâmica para styled component
export const Category = styled.div<{ color: string}>`
display: inline-block;
padding: 5px 10px;
border-radius: 5px;
color: #FFF;
background-color: ${props => props.color}

`