import { useQuery } from "@apollo/client";
import CO2_QUERY from 'lib/queries/GET-CO2'

export const PolylineChart = () => {
  const { data, error, loading } = useQuery(CO2_QUERY);
  
  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>Data Not Found</h2>;
  
  const maxValueFloat = Math.max(...data.data.map((co2Data: any) => co2Data.co2))
  const maxValue = Math.ceil(maxValueFloat)
  
  const xAxis = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const yAxis = [10, 20, 50, 70, 30, 40, 10, 100, 80, 50, 100]
  
  const length = data.data.length
  
  let polylineString: string = ''
  
  for (let i = 0; i < length; i++) {
    polylineString += `${xAxis[i]}, ${yAxis[i]} `
  }

  console.log("map", maxValue)

// data.data.map((co2Data: any) => {
//   const prev = cachedValue
//   // console.log("prev", prev)
//   const next = (co2Data.co2 / maxValue) * 100
//   // console.log("next", next)
//   cachedValue = next
//   return (<div key={co2Data.year}>
//     <Line prev={prev} next={next} />
//   </div>)
// })

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