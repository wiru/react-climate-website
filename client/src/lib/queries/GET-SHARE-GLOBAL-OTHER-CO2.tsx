import gql from 'graphql-tag';

export const GET_SHARE_GLOBAL_OTHER_CO2 = gql`{
  data {
    year
    share_global_other_co2
  }
}
`