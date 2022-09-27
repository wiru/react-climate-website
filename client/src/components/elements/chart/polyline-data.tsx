const data = [1, 2, 5, 7, 3, 4, 1, 10, 8, 5, 10]
const plot = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const length = data.length
let polylineString: string = ''
for (let i = 0; i < length; i++) {
  polylineString += `${plot[i]}, ${data[i]} `
}

export const PolylineChart = (data: any) => {
  return (
    <div className="flex grow p-5">
      <svg viewBox="0 0 100 10">
        <polyline
          fill="none"
          stroke="#000000"
          stroke-width="0.2"
          points={polylineString}
        />
      </svg>
    </div>
  )
}