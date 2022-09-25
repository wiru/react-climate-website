import { useQuery } from "@apollo/client";
import YEARS_QUERY from "../../lib/queries/GET-YEARS";
import Link from "next/link";
import { Line } from "components/elements/chart/chart-line";
import { XAxisYears } from "components/elements/chart/x-axis-years";

export const Home = () => {
  const { data, error, loading } = useQuery(YEARS_QUERY);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>404 | Product Not Found</h2>;

  return (
    <div className='flex flex-col items-center grow bg-blue-100 p-10'>
      <Link href="/climate-change">Climate Change</Link>
      <div className='flex grow'>
        {data.data.map((yearData: any) => <div key={yearData.year}>
          <Line prev={50} next={50} />
        </div>)}
      </div>
      <XAxisYears />
    </div>
  );
}
