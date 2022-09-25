import React from 'react';
import { Navbar } from 'components/patterns/nav/header/navbar';
import { Footer } from 'components/patterns/nav/footer/footer';

export const StandardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
