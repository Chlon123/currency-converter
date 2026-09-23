import { Link, Outlet } from 'react-router';

import { Layout } from './layout';

export function AppLayout () {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <Layout.Main>
          <Outlet />
        </Layout.Main>
      </Layout.Body>
    </Layout>
  );
}
