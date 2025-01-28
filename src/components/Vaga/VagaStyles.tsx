import styled from 'styled-components'

// Estilizando o item da lista
export const ListItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

// Estilizando o título da vaga
export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

// Estilizando a lista de detalhes
export const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 16px 0;

  li {
    margin-bottom: 4px; /* Espaçamento entre os itens da lista */
  }
`

// Estilizando o link
export const Link = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  /* Efeito de hover no link */
  ${ListItem}:hover & {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`
