import React, { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
};

export default Layout;
