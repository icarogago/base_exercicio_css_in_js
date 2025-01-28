import styled from 'styled-components'

// Estilizando o contêiner principal
export const Container = styled.div`
  padding: 16px;
`

// Estilizando a lista de vagas
export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
