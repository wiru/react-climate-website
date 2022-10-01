import { useQuery } from "@apollo/client";
// import YEARS_QUERY from "lib/queries/GET-YEARS";

// export const XAxisYearsData = () => {
//   const { data } = useQuery(YEARS_QUERY);
//   const startYear = data.data[0].year
//   const endYear = data.data[data.data.length - 1].year
//   /**
//    * Make this reactive to page resizing, I assume with useEffect and an addEventListener. 
//    */
//   const cols = Math.floor(window.innerWidth / 100)
//   const dif = endYear - startYear
//   const period = Math.floor(dif / cols)
//   const yearsArray: any = []
//   for (let i = 0; i < cols; i++) {
//     if (i === cols - 1) yearsArray[i] = endYear
//     else yearsArray[i] = startYear + period * i
//   }
//   return yearsArray
// }