import { useEffect, useState } from "react"
import { IKeyNumberArrayObj } from "../interface/i-key-number-array-obj"

export const XAxis = ({data}: IKeyNumberArrayObj) => {

  const [yearsArray, setYearsArray] = useState([1])

  useEffect(()=>{
    setYearsArray(data)
  }, [data])

  return (
    <div className='flex w-full justify-between pb-5 border-t-4 border-black'>
      {yearsArray.map((year: number) =>
        <div className="flex -rotate-45" key={year}>{year}</div>)}
    </div>
  )
}