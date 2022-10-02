import gql from 'graphql-tag';

export const GET_SHARE_GLOBAL_COAL_CO2 = gql`{
  data {
    year
    share_global_coal_co2
  }
}
`