import gql from 'graphql-tag';

export const GET_CUMULATIVE_CO2 = gql`{
  data {
    year
    cumulative_co2
  }
}
`