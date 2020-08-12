import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'antd';
import pages from 'constants/pages';

const MainMenu = () => {
  const location = useLocation();
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
      {pages.map(page => {
        const Icon = page.icon;
        return (
          <Menu.Item key={page.href} icon={<Icon />}>
            {page.title}
            <Link to={page.href} />
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MainMenu;
