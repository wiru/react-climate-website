import gql from 'graphql-tag';

export const GET_COAL_CO2 = gql`{
  data {
    year
    coal_co2
  }
}
`