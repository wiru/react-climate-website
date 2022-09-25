
import { useApollo } from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../../styles/global.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: any
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const getLayout = Component?.getLayout ?? ((page) => page)

  return (
    <div className='min-h-full'>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </div>
  )
}

export default MyApp