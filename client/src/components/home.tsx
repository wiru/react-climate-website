import { useQuery } from "@apollo/client";
import YEARS_QUERY from "../lib/queries/GET-YEARS";
import Link from "next/link";

export const Home = () => {
  const { data, error, loading } = useQuery(YEARS_QUERY);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>404 | Product Not Found</h2>;

  return (
    <div>
      <Link href="/sources">Sources</Link>
      {data.data.map((yearData: any) => <p key={yearData.year}>{yearData.year}</p>)}
    </div>
  );
}