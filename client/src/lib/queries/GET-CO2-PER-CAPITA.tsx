import gql from 'graphql-tag';

export const GET_CO2_PER_CAPITA = gql`{
  data {
    year
    co2_per_capita
  }
}
`