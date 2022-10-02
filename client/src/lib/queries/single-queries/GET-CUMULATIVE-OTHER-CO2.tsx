import gql from 'graphql-tag';

export const GET_CUMULATIVE_OTHER_CO2 = gql`{
  data {
    year
    cumulative_other_co2
  }
}
`