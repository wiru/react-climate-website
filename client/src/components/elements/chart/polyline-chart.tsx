import { GET_QUERY } from "@/lib/queries/GET-QUERY"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"

interface dataElement {
  year: number
  [name: string]: number
}
type queryObj = {
  data: dataElement[]
}
export const PolylineChart = ({ currentQuery }: any) => {
  const { data, error, loading } = useQuery(GET_QUERY(currentQuery));
  useEffect(() => {
    if (data) console.log("HI", data.data[0])
  }), [currentQuery];

  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h2>Error</h2>;
  if (data === undefined) return <h2>Data Not Found</h2>;
  console.log("data", data.data)


  const maxValueFloat = Math.max(...data.data.map((obj: dataElement) => Object.values(obj)[2]))
  console.log("maxValueFloat", maxValueFloat)
  const maxValue = Math.ceil(maxValueFloat)
  const climateDataArray = data.data.map((obj: dataElement) => 100 - ((Object.values(obj)[2] / maxValue) * 100))
  const length = climateDataArray.length
  console.log("climateDataArray", climateDataArray)
  let polylineString: string = ''

  for (let i = 0; i < length; i++) {
    const x = i / length * 100
    polylineString += `${x}, ${climateDataArray[i]} `
  }

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