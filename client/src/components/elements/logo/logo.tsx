import Image from 'next/image';
import dolphinImg from '@/public/images/dolphin-orange.svg'

export const Logo = () => (
  <Image src={dolphinImg} width={50} height={50} alt='dolphin logo' />
)