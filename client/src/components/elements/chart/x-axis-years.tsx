import { useQuery } from "@apollo/client";
import YEARS_QUERY from "lib/queries/GET-YEARS";
import { useEffect, useState } from "react";

export const XAxisYears = () => {
  // useEffect(()=> {
  //   window.addEventListener('resize', handleResize)
  //   return window.removeEventListener('resize', handleResize)
  // })
  
  // const [windowSize, setWindowSize] = useState({
  //   innerWidth: 0,
  //   innerHeight: 0
  // })
  const {loading, data} = useQuery(YEARS_QUERY);
  
  if (loading) return <p>POOP</p>
  
  const cachedData = data
  const startYear = cachedData.data[0].year
  const endYear = cachedData.data[data.data.length - 1].year
  
  //   const handleResize = () => {
  //   setWindowSize(window)
  // }
  
  const cols = Math.floor(window.innerWidth / 100)
  const dif = endYear - startYear
  const period = Math.floor(dif / cols)
  const yearsArray: string[] = []
  for (let i = 0; i < cols; i++) {
    if (i === cols - 1) yearsArray[i] = endYear
    else yearsArray[i] = startYear + period * i
  }
  console.log(yearsArray.map((data: any)=> data))
  return (
    <div className='flex w-full justify-between border-t-4 border-black'>
      {yearsArray.map((year: string) =>
        <div className="flex" key={year}>{year}</div>)}
    </div>
  )
}