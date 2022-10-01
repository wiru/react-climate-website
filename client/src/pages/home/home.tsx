import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { useQuery } from "@apollo/client";
import { PolylineChart } from "components/elements/chart/polyline-data";
import { XAxisYears } from "components/elements/chart/x-axis-years";
import { YAxis } from "components/elements/chart/y-axis";
import CO2_QUERY from "lib/queries/GET-CO2";

export const Home = () => {
  
  return (
    <>
      <div className='flex flex-col grow p-5 bg-blue-100'>
        <Dropdown />
        <div className='flex flex-row grow p-5 bg-blue-100'>
          <YAxis />
          <div className='flex flex-col items-center grow'>
            <PolylineChart />
            <XAxisYears />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
