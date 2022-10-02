import { ClimateDataKeyValue } from "@/components/common/constant/climate-data-key-value";
import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { PolylineChart } from "components/elements/chart/polyline-chart";
import { XAxisYears } from "components/elements/chart/x-axis-years";
import { useState } from "react";

export const Home = () => {

  const [currentQuery, setCurrentQuery] = useState(ClimateDataKeyValue.GET_CO2)

  return (
    <>
      <div className='flex flex-col grow p-5 bg-blue-100'>
        <Dropdown setCurrentQuery={setCurrentQuery} />
        <div className='flex flex-row grow p-5 bg-blue-100'>
          {/* <YAxis /> */}
          <div className='flex flex-col items-center grow'>
            <PolylineChart currentQuery={currentQuery} />
            <XAxisYears />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
