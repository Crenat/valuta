// Layouts
import { useState } from 'react'
import { Layout, Menu } from 'antd'

// Icons
import { DollarTwoTone, PlaySquareTwoTone } from '@ant-design/icons';

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
  const defaultTab = window.localStorage.getItem('selectedTab') || '0';
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState(defaultTab);
  const items = [
    getItem('Курси валют', '0', <DollarTwoTone />),
    getItem('Фільми', '1', <PlaySquareTwoTone />),
  ];

  const handleItemClick = (item) => {
    window.localStorage.setItem('selectedTab', item.key);
    setSelectedItem(item.key);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="header-logo">DB</div>
        <Menu theme="dark" defaultSelectedKeys={[defaultTab]} mode="inline" items={items} onClick={handleItemClick} />
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
          Crenat ©{new Date().getFullYear()} Авторскі права належать Марценюку Юрію
          <div className="social-media">
            <div className="social-media-item">
              <a href="mailto:martsenyuk.yura@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
              </a>
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  )
}