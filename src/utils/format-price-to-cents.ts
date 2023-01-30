export function formatPriceToCents(price: string) {
  const priceInCents = parseFloat(
    price.toLocaleUpperCase().trim().replace('R$', '').replace(',', '.'),
  )

  if (Number.isNaN(priceInCents)) {
    return
  }

  return priceInCents * 100
}
