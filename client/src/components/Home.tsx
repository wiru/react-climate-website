import { useQuery } from "@apollo/client";
import YEARS_QUERY from "../lib/queries/YEARS_QUERY";
import { useState } from 'react'
import Link from "next/link";

export const Home = () => {
  const [count, setCount] = useState(0)
  const { data, error, loading } = useQuery(YEARS_QUERY);

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data === 0) return <h2>404 | Product Not Found</h2>;


  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Link href="/sources">Sources</Link>
      <button onClick={handleClick}>{count}</button>
      {data.data.map((yearData: any) => <p key={yearData.year}>{yearData.year}</p>)}
    </div>
  );
}