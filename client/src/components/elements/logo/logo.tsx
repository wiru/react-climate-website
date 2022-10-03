import Image from 'next/image';
import treeIconWhite from '@/public/images/treeIconWhite.svg'

export const Logo = () => (
  <Image src={treeIconWhite} width={50} height={50} alt='dolphin logo' />
)