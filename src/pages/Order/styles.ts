import styled from 'styled-components'

export const ContainerOrder = styled.main`
  padding-top: 2rem;

  table {
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
    }

    th,
    td {
      padding: 1rem;
      border: 2px solid ${(props) => props.theme['light-700']};
    }
  }
`

const STATUS_COLOR = {
  pending: 'tomato-100',
  complete: 'mint-100',
  preparing: 'carrot-100',
} as const

interface StatusProps {
  variant: 'pending' | 'complete' | 'preparing'
}

export const TableStatus = styled.span<StatusProps>`
  margin-right: 0.5rem;
  color: ${({ theme, variant }) => theme[STATUS_COLOR[variant]]};
`
