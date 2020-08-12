import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MainMenu from 'components/MainMenu';
import { onLogout } from 'features/App/slice';
import { useDispatch } from 'react-redux';

import './index.scss';

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const { Header, Content, Sider } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => dispatch(onLogout());
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/">
          <div className="logo" />
        </Link>
        <MainMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
          <Button
            onClick={handleLogout}
            danger
            style={{ float: 'right', margin: 14 }}>
            Logout
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
