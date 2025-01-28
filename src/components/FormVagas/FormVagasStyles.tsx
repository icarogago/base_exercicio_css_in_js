import styled from 'styled-components'

// Estilizando o formulário
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

// Estilizando o campo de entrada
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  border-radius: 4px;
  height: 40px;
`

// Estilizando o botão de pesquisa
export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: darken(
      var(--cor-principal),
      10%
    ); /* Escurecendo a cor ao passar o mouse */
    color: black; /* Mudando a cor da fonte para preto ao passar o mouse */
  }
`
