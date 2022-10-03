import { GET_QUERY } from 'lib/queries/GET-QUERY'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
// import { YAxis } from './component/y-axis'
import { XAxis } from './component/x-axis'
import { ChartBody } from './component/chart-body'
import { IGqlQueryObj } from './interface/i-gql-query-obj'
import { getSizedYearsArray } from './function/get-sized-years-array'



export const ClimateChart = ({ currentQuery }: any) => {
  const { data, error, loading } = useQuery(GET_QUERY(currentQuery));

  useEffect(() => {
  }), [currentQuery];

  const [windowWidth, setWindowSize] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    setWindowSize(window.innerWidth)
  }

  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h2>Error</h2>;
  if (data === undefined) return <h2>Data Not Found</h2>;


  const sizedYearsArray = getSizedYearsArray({ data: data.data.map((obj: IGqlQueryObj) => obj.year), width: windowWidth })
  console.log("sizedYearsArray", sizedYearsArray)
  const maxValueFloat = Math.max(...data.data.map((obj: IGqlQueryObj) => Object.values(obj)[2]))
  const maxValue = Math.ceil(maxValueFloat)
  console.log("maxValue", maxValue)
  console.log("maxValueFloat", maxValueFloat)
  const climateDataArray = data.data.map((obj: IGqlQueryObj) => 100 - ((Object.values(obj)[2] / maxValue) * 100))
  const length = climateDataArray.length
  let polylineString: string = ''

  for (let i = 0; i < length; i++) {
    const x = i / length * 100
    polylineString += `${x}, ${climateDataArray[i]} `
  }

  return (
    <div className="relative grow flex">
      {/* <YAxis data={ } /> */}
      <div className="relative grow flex flex-col">
        <ChartBody data={polylineString} />
        <XAxis data={sizedYearsArray} />
      </div>    </div>)
}