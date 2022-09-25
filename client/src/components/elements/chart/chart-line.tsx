interface chartData {
  prev: number,
  next: number
}

export const Line = ({ prev, next }: chartData) => {
  const prevValue = `${100 - prev}%`
  const nextValue = `${100 - next}%`
  return (
    <svg height="100%" width="100%">
      <line x1="0" y1={prevValue} x2="100%" y2={nextValue} style={{ stroke: 'rgb(0,0,0)', strokeWidth: '1' }} />
    </svg>
  )
}