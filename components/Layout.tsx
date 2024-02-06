import { ReactNode, useEffect } from 'react';

function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
}

export default Layout;
