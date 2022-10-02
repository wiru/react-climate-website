import gql from 'graphql-tag';

export const GET_GAS_CO2 = gql`{
  data {
    year
    gas_co2
  }
}
`