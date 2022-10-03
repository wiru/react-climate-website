import { useQuery } from '@apollo/client'
import { GET_QUERY } from 'lib/queries/GET-QUERY'
import { useEffect, useState } from 'react'
import { ChartBody } from './component/chart-body'
import { XAxis } from './component/x-axis'
import { YAxis } from './component/y-axis'
import { getSizedUnitArray } from './function/get-sized-unit-array'
import { getSizedYearsArray } from './function/get-sized-years-array'
import { IGqlQueryObj } from './interface/i-gql-query-obj'

export const ClimateChart = ({ currentQuery }: any) => {
  const { data, error, loading } = useQuery(GET_QUERY(currentQuery));

  useEffect(() => {
  }), [currentQuery];

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  if (loading) return <h1>Loading...</h1>;
  if (error || !data) return <h2>Error</h2>;
  if (data === undefined) return <h2>Data Not Found</h2>;


  const sizedYearsArray = getSizedYearsArray({ data: data.data.map((obj: IGqlQueryObj) => obj.year), width: windowSize.width })
  const sizedUnitArray = getSizedUnitArray({ data: data.data.map((obj: IGqlQueryObj) => obj[currentQuery]), height: windowSize.height })

  const maxValueFloat = Math.max(...data.data.map((obj: IGqlQueryObj) => Object.values(obj)[2]))
  const maxValue = Math.ceil(maxValueFloat)
  const climateDataArray = data.data.map((obj: IGqlQueryObj) => 100 - ((Object.values(obj)[2] / maxValue) * 100))
  const length = climateDataArray.length
  let polylineString: string = ''

  for (let i = 0; i < length; i++) {
    const x = i / length * 100
    polylineString += `${x}, ${climateDataArray[i]} `
  }

  return (
    <div className="relative grow flex chart-padding">
      <YAxis data={sizedUnitArray} />
      <div className="relative grow flex flex-col">
        <ChartBody data={polylineString} />
        <XAxis data={sizedYearsArray} />
      </div>
    </div>
  )
}