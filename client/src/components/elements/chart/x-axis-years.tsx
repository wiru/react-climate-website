import { XAxisYearsData } from "./data/x-axis-years-data"

export const XAxisYears = () => {
  return (
    <div className='flex w-full justify-between border-t-4 border-black'>
      {XAxisYearsData().map((yearData: any) =>
        <div className="flex" key={yearData}>{yearData}</div>)}
    </div>
  )
}