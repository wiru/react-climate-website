import gql from 'graphql-tag';

export const GET_GAS_CO2_PER_CAPITA = gql`{
  data {
    year
    gas_co2_per_capita
  }
}
`