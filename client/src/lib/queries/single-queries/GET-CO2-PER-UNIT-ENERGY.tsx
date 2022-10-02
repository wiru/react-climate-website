import gql from 'graphql-tag';

export const GET_CO2_PER_UNIT_ENERGY = gql`{
  data {
    year
    co2_per_unit_energy
  }
}
`