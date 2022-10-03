import { useEffect, useState } from "react"
import { IKeyStringArrayObj } from "../interface/i-key-string-array-obj"

export const YAxis = ({ data }: IKeyStringArrayObj) => {

  const [unitArray, setUnitArray] = useState(["0"])

  useEffect(() => {
    setUnitArray(data)
  }, [data])

  return (
    <div className="flex pb-20 -mr-4">
      <div className="flex flex-col w-8 h-full justify-center">
        <p className='vertical-text w-fit h-fit'>
          co2 Parts per Million 
        </p>
      </div>
      <div className='flex grow text-right flex-col justify-between'>
        {unitArray.slice(0).reverse().map((unit: string, index: number) =>
          <p className="text-xs" key={index}>{unit}</p>)}
      </div>
    </div>
  )
}