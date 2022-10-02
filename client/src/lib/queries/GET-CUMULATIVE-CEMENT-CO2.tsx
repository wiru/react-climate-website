import gql from 'graphql-tag';

export const GET_CUMULATIVE_CEMENT_CO2 = gql`{
  data {
    year
    cumulative_cement_co2
  }
}
`