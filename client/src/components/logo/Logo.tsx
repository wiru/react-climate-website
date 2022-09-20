import Image from 'next/image';
import dolphinImg from 'public/dolphin-orange.svg'

export const Logo = () => (
  <Image src={dolphinImg} width={200} height={200} />
)