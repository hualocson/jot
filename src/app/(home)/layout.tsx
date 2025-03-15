import React, { FC, PropsWithChildren } from "react";

import Footer from "./components/footer";
import Header from "./components/header";

interface IHomeLayoutProps extends PropsWithChildren {}

const HomeLayout: FC<IHomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[80px]">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
