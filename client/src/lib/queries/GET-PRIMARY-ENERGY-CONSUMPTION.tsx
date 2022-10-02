import gql from 'graphql-tag';

export const GET_PRIMARY_ENERGY_CONSUMPTION = gql`{
  data {
    year
    primary_energy_consumption
  }
}
`