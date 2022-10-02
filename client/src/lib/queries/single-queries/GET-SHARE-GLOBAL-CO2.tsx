import gql from 'graphql-tag';

export const GET_SHARE_GLOBAL_CO2 = gql`{
  data {
    year
    share_global_co2
  }
}
`