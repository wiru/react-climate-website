import gql from 'graphql-tag';

export const GET_SHARE_GLOBAL_CUMULATIVE_CEMENT_CO2 = gql`{
  data {
    year
    share_global_cumulative_cement_co2
  }
}
`