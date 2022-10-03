import { ClimateDataKeyValue } from "@/components/common/constant/climate-data-key-value";
import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { ClimateChart } from "@/components/elements/chart/climate-chart";
import { useState } from "react";
import { Rainforest } from "@/components/elements/image/rainforest";

export const Home = () => {

  const [currentQuery, setCurrentQuery] = useState(ClimateDataKeyValue.GET_CO2)
  return (
    <div className="flex flex-col grow relative">
      <Rainforest />
      <Dropdown setCurrentQuery={setCurrentQuery} />
      <ClimateChart currentQuery={currentQuery} />
    </div>
  );
}

export default Home
