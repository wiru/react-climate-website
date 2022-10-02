import gql from 'graphql-tag';

export const GET_YEARS = gql`{
  data {
    year
  }
}
`