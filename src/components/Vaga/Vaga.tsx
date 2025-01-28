import React from 'react'
import { ListItem, Title, DetailsList, Link } from './VagaStyles' // Importando os estilos

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<Props> = (props) => (
  <ListItem>
    <Title>{props.titulo}</Title>
    <DetailsList>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </DetailsList>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </ListItem>
)

export default Vaga
