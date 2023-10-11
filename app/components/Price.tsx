export const formatValueToReal = new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
})

type PriceProps = {
    value?: string | number
}


const Price = ({ value }: PriceProps) => {
    return (
        <p className="font-semibold">{formatValueToReal.format(Number(value))}</p>
    )
}

export default Price