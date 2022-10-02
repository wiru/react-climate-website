import gql from 'graphql-tag';

export const GET_CO2 = gql`{
  data {
    year
    cumulative_co2
  }
}
`