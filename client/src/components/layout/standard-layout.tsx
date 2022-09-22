import React from "react";
import { Navbar } from "components/sub-components/navbar/navbar";
import { Footer } from "components/sub-components/footer/footer";

export const StandardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
