import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import './index.scss';

import { selectLoading } from 'features/App/selectors';

function GlobalLoading() {
  const loading = useSelector(selectLoading);
  if (loading === true) {
    return <div className="loading-container"><Spin size="large" /></div>;
  }
  return null;
}

export default GlobalLoading;