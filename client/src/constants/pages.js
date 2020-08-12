import UserOutlined from '@ant-design/icons/UserOutlined';
import VideoCameraOutlined from '@ant-design/icons/VideoCameraOutlined';
import LaptopOutlined from '@ant-design/icons/LaptopOutlined';

import { INVOICE_STATUS, VENDOR_STATEMENT, REQUEST } from './routes';

export default [
  {
    title: 'Invoice Status',
    href: INVOICE_STATUS,
    icon: UserOutlined,
  },
  {
    title: 'Vendor Statement',
    href: VENDOR_STATEMENT,
    icon: VideoCameraOutlined,
  },
  {
    title: 'Request',
    href: REQUEST,
    icon: LaptopOutlined,
  },
];
