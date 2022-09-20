import Link from 'next/link';
import { Logo } from 'components/logo/Logo';


export default function Workspace() {
  return (
    <>
      <Logo />
      <p>Hello!</p>
      <Link href="/">Home</Link>
    </>
  )
}