import { Heart } from 'phosphor-react'
import { useState } from 'react'
import { HeartContainer } from './styles'

export function ButtonFavorite() {
  const [value, setValue] = useState(false)

  return (
    <HeartContainer variant={value} onClick={() => setValue(!value)}>
      {!value ? <Heart size={24} /> : <Heart size={24} weight="fill" />}
    </HeartContainer>
  )
}
