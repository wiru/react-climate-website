import gql from 'graphql-tag';

export const GET_CUMULATIVE_GAS_CO2 = gql`{
  data {
    year
    cumulative_gas_co2
  }
}
`