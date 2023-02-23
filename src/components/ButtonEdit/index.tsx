import { PencilSimple } from 'phosphor-react'
import { EditContainer } from './styles'

interface EditProps {
  slug: string
}

export function ButtonEdit({ slug }: EditProps) {
  return (
    <EditContainer to={`edit/${slug}`}>
      <PencilSimple size={24} />
    </EditContainer>
  )
}
