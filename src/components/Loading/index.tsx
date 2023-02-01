import { Icon, LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <Icon viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6024 0.306641L26.2484 7.60782V22.2102L13.6024 29.5114L0.956346 22.2102V7.60782L13.6024 0.306641Z" />
      </Icon>
      <strong>Loading...</strong>
    </LoadingContainer>
  )
}
