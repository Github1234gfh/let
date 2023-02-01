import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { _Header } from '../Components/Header';
import { _Content } from '../Components/Content';

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ background: 'none' }}>
			<_Header />
			<_Content />
    </Layout>
  );
};
