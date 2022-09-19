import { gql } from "apollo-server";
import { JapanData } from "./climate-data.js";

export const typeDefs = gql`

  type JapanData {
    year: Int
    population: Int
    co2: Float
    co2_per_capita: Float
    coal_co2: Float
    coal_co2_per_capita: Float
    cumulative_co2: Float
    cumulative_coal_co2: Float
    share_global_co2: Float
    share_global_coal_co2: Float
    share_global_cumulative_co2: Float
    share_global_cumulative_coal_co2: Float
  }

  type Query {
    data: [JapanData]
  }
`;

export const resolvers = {
  Query: {
    data: () => JapanData,
  },
};
