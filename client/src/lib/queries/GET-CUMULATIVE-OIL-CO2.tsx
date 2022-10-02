import gql from 'graphql-tag';

export const GET_CUMULATIVE_OIL_CO2 = gql`{
  data {
    year
    cumulative_oil_co2
  }
}
`