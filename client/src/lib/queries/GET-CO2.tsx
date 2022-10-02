import gql from 'graphql-tag';

export const GET_CO2 = gql`{
  data {
    co2
    year
  }
}
`