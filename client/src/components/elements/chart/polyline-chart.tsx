import { useQuery } from "@apollo/client";
import CO2_QUERY from 'lib/queries/GET-CO2'

type dataElement = {
  year: number
  co2: number
}
type queryObj = {
  data: dataElement[]
}
export const PolylineChart = () => {
  const { data, error, loading } = useQuery<queryObj>(CO2_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h2>Error</h2>;
  if (data === undefined) return <h2>Data Not Found</h2>;

  const maxValueFloat = Math.max(...data.data.map((co2Data) => co2Data.co2))
  const maxValue = Math.ceil(maxValueFloat)
  const co2DataArray = data.data.map((data) => 100 - (data.co2 / maxValue) * 100)
  const length = co2DataArray.length

  let polylineString: string = ''

  console.log("co2DataArray", co2DataArray)

  for (let i = 0; i < length; i++) {
    const x = i / length * 100
    polylineString += `${x}, ${co2DataArray[i]} `
  }

  console.log("map", maxValue)

  return (
    <div className="flex grow w-full relative box-border">
      <svg className="absolute top-0 left-0 right-full bottom-full px-5 pb-2 border" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#000000"
          strokeWidth="0.2"
          points={polylineString}
        />
        <line x1="0" y1="100" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.3" />
      </svg>
    </div >
  )
}