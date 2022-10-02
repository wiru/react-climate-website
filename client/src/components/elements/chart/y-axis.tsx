import { useQuery } from "@apollo/client";
import { useState } from "react";

export const YAxis = () => {
  const { loading, data } = useQuery(currentQuery);
  const [[windowHeight], setWindowSize] = useState([] as windowSize)

  const handleResize = () => {
    setWindowSize([window.innerHeight, window.innerWidth])
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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