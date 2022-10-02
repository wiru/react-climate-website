import gql from 'graphql-tag';

export const GET_OTHER_INDUSTRY_CO2 = gql`{
  data {
    year
    other_industry_co2
  }
}
`