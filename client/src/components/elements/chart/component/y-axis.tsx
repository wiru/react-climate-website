import { useEffect, useState } from "react";
import { IKeyNumberObj } from "../interface/i-key-number-obj";

export const YAxis = ({ YAxisData }: any) => {

  const { yAxisData, setYAxisData } = useState(YAxisData);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (loading) return <p>Hello there</p>
  const yearsArray = data.data.map((obj: yearsObj) => obj.year)
  const startYear = yearsArray[0]
  const endYear = yearsArray[yearsArray.length - 1]
  const cols = Math.floor((windowWidth || window.innerWidth) / 50)
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
        <div className="flex -rotate-45" key={year}>{year}</div>)}
    </div>
  )
}