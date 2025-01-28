import React from 'react'
import { Header } from './CabecalhoStyles' // Importando os estilos

interface CabecalhoProps {
  title?: string // Propriedade opcional para o título
}

const Cabecalho: React.FC<CabecalhoProps> = ({ title = 'EBAC Jobs' }) => (
  <Header>
    <h1>{title}</h1>
  </Header>
)

export default Cabecalho
