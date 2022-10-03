import { IKeyStringObj } from "../interface/i-key-string-obj"

export const ChartBody = ({data}: IKeyStringObj) => {
  return (
    <div className="flex grow w-full relative box-border">
      <svg className="absolute top-0 left-0 right-full bottom-full px-5 pb-2 border" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#000000"
          strokeWidth="0.2"
          points={data}
        />
        <line x1="0" y1="100" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.3" />
      </svg>
    </div>
  )
}