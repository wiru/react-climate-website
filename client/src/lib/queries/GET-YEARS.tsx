import gql from 'graphql-tag';

const GET_YEARS = gql`{
    data {
      year
    }
  }
  `
export default GET_YEARS;