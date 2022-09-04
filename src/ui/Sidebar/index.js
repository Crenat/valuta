// Layouts
import { useState } from 'react'
import { Layout, Menu } from 'antd'

import { DollarTwoTone } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


export const Sidebar = ({ content }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState('0');
  const items = [
    getItem('Курси валют', '0', <DollarTwoTone />),
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.key);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{ height: '2rem', margin: '1rem', color: '#FAFAFA' }}>Dashboard</div>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} onClick={handleItemClick} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {content[selectedItem]}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Crenat ©{new Date().getFullYear()} Created by Yuriy Martsenyuk
        </Footer>
      </Layout>
    </Layout>
  )
}