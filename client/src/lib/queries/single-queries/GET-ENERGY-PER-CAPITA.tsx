import gql from 'graphql-tag';

export const GET_ENERGY_PER_CAPITA = gql`{
  data {
    year
    energy_per_capita
  }
}
`