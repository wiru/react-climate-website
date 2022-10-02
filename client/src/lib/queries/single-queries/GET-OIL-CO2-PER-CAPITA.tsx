import gql from 'graphql-tag';

export const GET_OIL_CO2_PER_CAPITA = gql`{
  data {
    year
    oil_co2_per_capita
  }
}
`