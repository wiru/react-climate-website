import { ClimateDataKeyValue } from "@/components/common/constant/climate-data-key-value";
import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { ClimateChart } from "@/components/elements/chart/climate-chart";
import { useState } from "react";

export const Home = () => {

  const [currentQuery, setCurrentQuery] = useState(ClimateDataKeyValue.GET_CO2)
  return (
    <>
      <Dropdown setCurrentQuery={setCurrentQuery} />
      <ClimateChart currentQuery={currentQuery} />
    </>
  );
}

export default Home
