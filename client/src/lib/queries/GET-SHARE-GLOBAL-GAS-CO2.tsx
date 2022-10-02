import gql from 'graphql-tag';

export const GET_SHARE_GLOBAL_GAS_CO2 = gql`{
  data {
    year
    share_global_gas_co2
  }
}
`