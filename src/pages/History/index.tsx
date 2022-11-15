import React from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>2 horas</td>
              <td>Há 10 minutos</td>
              <td>
                <Status statusColor={'green'}>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>2 horas</td>
              <td>Há 10 minutos</td>
              <td>
                <Status statusColor={'red'}>Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>2 horas</td>
              <td>Há 10 minutos</td>
              <td>
                <Status statusColor={'green'}>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>2 horas</td>
              <td>Há 10 minutos</td>
              <td>
                <Status statusColor={'yellow'}>Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
