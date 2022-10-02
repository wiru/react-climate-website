import { gql } from "apollo-server";
import { JapanData } from "./climate-data.js";

export const typeDefs = gql`

  type JapanData {
    cement_co2: Float,
    cement_co2_per_capita: Float,
    co2: Float,
    co2_per_capita: Float,
    co2_per_unit_energy: Float,
    coal_co2: Float,
    coal_co2_per_capita: Float,
    cumulative_cement_co2: Float,
    cumulative_co2: Float,
    cumulative_coal_co2: Float,
    cumulative_gas_co2: Float,
    cumulative_oil_co2: Float,
    cumulative_other_co2: Float,
    energy_per_capita: Float,
    gas_co2: Float,
    gas_co2_per_capita: Float,
    oil_co2: Float,
    oil_co2_per_capita: Float,
    other_co2_per_capita: Float,
    other_industry_co2: Float,
    population: Int,
    primary_energy_consumption: Float,
    share_global_cement_co2: Float,
    share_global_co2: Float,
    share_global_coal_co2: Float,
    share_global_cumulative_cement_co2: Float,
    share_global_cumulative_co2: Float,
    share_global_cumulative_coal_co2: Float,
    share_global_cumulative_gas_co2: Float,
    share_global_cumulative_oil_co2: Float,
    share_global_cumulative_other_co2: Float,
    share_global_gas_co2: Float,
    share_global_oil_co2: Float,
    share_global_other_co2: Float,
    year: Int
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
