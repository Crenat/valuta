// Libraries
import React from 'react';

// Styles
import './App.css';
import 'antd/dist/antd.css';

// Components
import { Affix, Button } from 'antd'

// Layouts
import { Currencies } from './layouts/Currencies'
import { Sidebar } from './ui/Sidebar'
import { ArrowUpOutlined } from '@ant-design/icons'

function App() {
  const [showToTopButton, setShowToTopButton] = React.useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowToTopButton(true)
      } else {
        setShowToTopButton(false)
      }
    })
  }, [])

  return (
    <div className="App">
      <Sidebar content={[<Currencies />]} />
      {showToTopButton && (
        <Affix offsetBottom={20} style={{ position: 'fixed', right: '20px' }}>
          <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} size="large" onClick={scrollToTop} className="to-top-button" />
        </Affix>
      )}
    </div>
  );
}

export default App;
