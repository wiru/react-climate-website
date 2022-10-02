import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { useQuery } from "@apollo/client";
import { PolylineChart } from "components/elements/chart/polyline-chart";
import { XAxisYears } from "components/elements/chart/x-axis-years";
import { GET_QUERY } from "lib/queries/GET-QUERY";
import { useState } from "react";
import { ClimateDataKeyValue } from "@/components/common/constant/climate-data-key-value";

export const Home = () => {

  const [currentQuery, setCurrentQuery] = useState(ClimateDataKeyValue.GET_CO2)

  console.log("currentQuery", currentQuery)

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
