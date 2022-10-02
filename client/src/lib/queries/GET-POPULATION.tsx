import gql from 'graphql-tag';

export const GET_POPULATION = gql`{
  data {
    year
    population
  }
}
`