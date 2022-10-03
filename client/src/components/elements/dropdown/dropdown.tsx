import { IStringObj } from "@/components/common/interface/i-string-obj"
import { ClimateDataValueDescription } from 'components/common/constant/climate-data-value-description'
import dropArrow from '@/public/images/dropArrow.svg' 

const options: IStringObj = ClimateDataValueDescription

export const Dropdown = ({setCurrentQuery}: any) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const result = Object.keys(options).find(key => options[key] === e.target.value)
    setCurrentQuery(result)
  }
  return (
    <div className="flex flex-row items-center relative w-full p-5 relative">
      <select onChange={handleChange} className="w-full p-2 text-gray-600 bg-white rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 pointer-events-auto">
        {Object.keys(options).map((option) => { return <option key={option} value={options[option]}>{options[option]}</option> })}
      </select>
      <img src={dropArrow.src} className="absolute right-7 pointer-events-none h-6"></img>
    </div>
  )
}