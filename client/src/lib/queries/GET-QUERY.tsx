import gql from 'graphql-tag';

export const GET_QUERY = (variable: string) => {
  return gql`{
  data {
    year,
    ${variable}
  }
}
`}