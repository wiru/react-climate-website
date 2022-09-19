import { useQuery } from "@apollo/client";
import YEARS_QUERY from "../lib/queries/YEARS_QUERY";

export const Home = () => {
    const { data, error, loading } = useQuery(YEARS_QUERY);
    console.log("DATA", data)

    if (loading) return <h1>Loading...</h1>;

    if (error || !data) return <h2>Error</h2>;
    if (data === 0) return <h2>404 | Product Not Found</h2>;

    return (
        <div>
            <h1>Home</h1>
            <h2>{data.data[0].year}</h2>
        </div>
    );
}