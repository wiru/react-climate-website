import { useQuery } from "@apollo/client";
import YEARS_QUERY from "lib/queries/GET-YEARS";
import { useEffect, useState } from "react";

export const XAxisYears = () => {
  const { loading, data } = useQuery(YEARS_QUERY);
  const [[windowWidth, windowHeight], setWindowSize] = useState([] as any)

  const handleResize = () => {
    setWindowSize([window.innerHeight, window.innerWidth])
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, windowHeight])

  if (loading) return <p>Hello there</p>
  const yearsArray = data.data.map((obj: any) => obj.year)
  const startYear = yearsArray[0]
  const endYear = yearsArray[yearsArray.length - 1]
  const cols = Math.floor(window.innerWidth / 100)
  const dif = endYear - startYear
  const period = Math.floor(dif / cols)
  const sizedYearsArray: number[] = []
  for (let i = 0; i < cols; i++) {
    if (i === cols - 1) sizedYearsArray[i] = endYear
    else sizedYearsArray[i] = startYear + period * i
  }
  return (
    <div className='flex w-full justify-between border-t-4 border-black'>
      {sizedYearsArray.map((year: number) =>
        <div className="flex" key={year}>{year}</div>)}
    </div>
  )
}