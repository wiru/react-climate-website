import gql from 'graphql-tag';

export const GET_OIL_CO2 = gql`{
  data {
    year
    oil_co2
  }
}
`