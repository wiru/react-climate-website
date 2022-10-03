import greenGeeksLogo from '@/public/images/greengeeks.svg'

export const Footer = () => (
  <footer className='flex justify-center h-12 items-center bg-green-500 p-2'>
    <h1 className='flex justify-center w-full text-slate-50 text-3xl'>FOOTER</h1>
    <img className="w-fit h-full bg-slate-50" src={greenGeeksLogo.src} alt="GreenGeeks Web Hosting Logo" />
  </footer>
)