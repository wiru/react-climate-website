const data = [10, 20, 50, 70, 30, 40, 10, 100, 80, 50, 100]
const plot = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const length = data.length
let polylineString: string = ''
for (let i = 0; i < length; i++) {
  polylineString += `${plot[i]}, ${data[i]} `
}

export const PolylineChart = (data: any) => {
  return (
    <div className="flex grow w-full relative box-border">
      <svg className="absolute top-0 left-0 right-full bottom-full px-5 pb-2 border" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke="#000000"
        stroke-width="0.2"
        points={polylineString}
      />
      <line x1="0" y1="100" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.3" />
    </svg>
    </div >
  )
}