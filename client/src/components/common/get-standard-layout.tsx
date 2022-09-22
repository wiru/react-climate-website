import { ReactElement } from 'react'
import { StandardLayout } from 'components/layout/standard-layout'

export const getStandardLayout = (page: ReactElement) => (
  <StandardLayout>{page}</StandardLayout>
)