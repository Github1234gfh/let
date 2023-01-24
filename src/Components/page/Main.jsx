import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { _Header } from './Header';
import { _Content } from './Content';
import { _Footer } from './Footer';

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ background: 'none' }}>
			<_Header />
			<_Content />
			<_Footer />
    </Layout>
  );
};

export default Main;