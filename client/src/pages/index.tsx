import { getStandardLayout } from 'components/common/get-standard-layout'
import { Home } from 'pages/home/home'

const HomePage = () => {
  return (
    <Home />
  )
}

HomePage.getLayout = getStandardLayout

export default HomePage
