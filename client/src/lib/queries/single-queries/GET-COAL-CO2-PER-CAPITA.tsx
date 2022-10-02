import gql from 'graphql-tag';

export const GET_COAL_CO2_PER_CAPITA = gql`{
  data {
    year
    coal_co2_per_capita
    }
  }
`