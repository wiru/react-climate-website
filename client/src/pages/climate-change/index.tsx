import { getStandardLayout } from 'components/common/get-standard-layout';
import Link from 'next/link';


const ClimatePage = () => {
  return (
    <div className='flex grow bg-blue-100'>
      <Link href="/">Home</Link>


    </div>
  )
}
ClimatePage.getLayout = getStandardLayout

export default ClimatePage