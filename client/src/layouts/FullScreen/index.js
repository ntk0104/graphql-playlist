import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import './index.scss';

const FullScreenLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <Content style={{ padding: '0 50px' }}>
      {children}
    </Content>
  );
};

FullScreenLayout.propTypes = {
  children: PropTypes.node,
};

export default FullScreenLayout;
