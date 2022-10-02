import gql from 'graphql-tag';

export const GET_CEMENT_CO2 = gql`{
  data {
    year
    cement_co2
  }
}
`