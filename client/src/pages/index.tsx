import { getStandardLayout } from '@/components/common/get-standard-layout'

const Page = () => {
  return (
    <div className='flex grow bg-blue-100'>
      <span>
        Hello
      </span>
    </div>
  )
}

Page.getLayout = getStandardLayout

export default Page
