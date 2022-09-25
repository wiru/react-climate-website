interface chartData {
  prev: number,
  next: number
}

export const Line = ({prev, next}: chartData) => (
  <svg height="100%" width="100%">
    <line x1="0" y1={prev} x2="100%" y2={next+10} style={{ stroke: 'rgb(0,0,0)', strokeWidth: '1'}} />
  </svg>
)