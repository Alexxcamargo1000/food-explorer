import { Circle } from 'phosphor-react'
import { ContainerOrder, TableStatus } from './styles'

export function Order() {
  return (
    <ContainerOrder>
      <h1>Pedidos</h1>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <TableStatus variant="pending">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Pendente
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="preparing">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Preparando
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="complete">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Entregue
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="complete">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Entregue
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="complete">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Entregue
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="complete">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Entregue
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>
              <TableStatus variant="complete">
                <Circle weight="fill" size={12} />
              </TableStatus>
              Entregue
            </td>

            <td>00000004</td>
            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>
            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </table>
    </ContainerOrder>
  )
}
