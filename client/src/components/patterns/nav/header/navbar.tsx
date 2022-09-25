import { Logo } from "@/components/elements/logo/logo";

export function Navbar() {
  return (
    <header className='flex justify-between items-center bg-blue-400 p-2'>
      <Logo />
      <h1 className='text-3xl'>NAVBAR</h1>
    </header>
  )
}