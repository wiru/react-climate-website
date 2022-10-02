import gql from 'graphql-tag';

export const GET_OTHER_CO2_PER_CAPITA = gql`{
  data {
    year
    other_co2_per_capita
  }
}
`