import React, { useEffect, useState, useRef } from 'react';
import { Table } from 'antd';
import { getUsersApi } from 'api/user';
import { useHistory, useLocation } from 'react-router-dom';

import './index.scss';

MainPage.propTypes = {};

const getRandomuserParams = params => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  };
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

function MainPage() {
  const isMounted = useRef(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    isMounted.current = true;
    fetch({ pagination: { current: 1, pageSize: 10 } });
    return () => { isMounted.current = false };
  }, []);

  const handleTableChange = (tablePagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: tablePagination,
      ...filters,
    });
  };

  const fetch = (params = {}) => {
    setLoading(true);
    return getUsersApi(getRandomuserParams(params)).then(res => {
      if (isMounted.current === true) {
        setLoading(false);
        setData(res.results);
        setPagination({
          ...params.pagination,
          total: 200,
        });
      }
    });
  };

  return (
    <Table
      columns={columns}
      rowKey={record => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
      onRow={(record, rowIndex) => ({
        onClick: () => history.push(`${location.pathname}/${rowIndex}`),
      })}
    />
  );
}

export default MainPage;
