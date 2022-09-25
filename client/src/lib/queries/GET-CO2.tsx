import gql from 'graphql-tag';

const GET_CO2 = gql`{
    data {
      co2
      year
    }
  }
  `
export default GET_CO2;