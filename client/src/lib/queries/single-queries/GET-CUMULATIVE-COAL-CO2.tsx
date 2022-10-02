import gql from 'graphql-tag';

export const GET_CUMULATIVE_COAL_CO2 = gql`{
  data {
    year
    cumulative_coal_co2
  }
}
`