import { Dropdown } from "@/components/elements/dropdown/dropdown";
import { useQuery } from "@apollo/client";
import { PolylineChart } from "components/elements/chart/polyline-data";
import { XAxisYears } from "components/elements/chart/x-axis-years";
import { YAxis } from "components/elements/chart/y-axis";
import CO2_QUERY from "lib/queries/GET-CO2";

export const Home = () => {
  const { data, error, loading } = useQuery(CO2_QUERY);

  console.log("DATA", data)

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>404 | Product Not Found</h2>;

  const maxValueFloat = Math.max(...data.data.map((co2Data: any) => co2Data.co2))
  const maxValue = Math.ceil(maxValueFloat)

  console.log("map", maxValue)

  return (
    <div className='flex flex-col grow p-5 bg-blue-100'>
      <Dropdown />
      <div className='flex flex-row grow p-5 bg-blue-100'>
        {/* <Link href="/climate-change">Climate Change</Link> */}
        {/* <div className='flex grow p-5'>
        {data.data.map((co2Data: any) => {
          const prev = cachedValue
          // console.log("prev", prev)
          const next = (co2Data.co2 / maxValue) * 100
          // console.log("next", next)
          cachedValue = next
          return (<div key={co2Data.year}>
            <Line prev={prev} next={next} />
          </div>)
        })}
      </div> */}
        <YAxis />
        <div className='flex flex-col items-center grow'>
          <PolylineChart />
          <XAxisYears />
        </div>
      </div>
    </div>
  );
}
