// Libraries
import React from 'react';

// Styles
import './App.css';
import 'antd/dist/antd.css';

// Components
import { Layout, Select, Typography } from 'antd';

// Hooks
import { useEffect, useState } from 'react';
import { Currency } from './components/Currency'
import { Skeleton } from 'antd/es'
import { Option } from 'antd/es/mentions'
import { Currencies } from './layouts/Currencies'
import { Sidebar } from './ui/Sidebar'

const { Title } = Typography;
const { Content } = Layout;

function App() {


  return (
    <div className="App">
        <Sidebar content={[<Currencies />]} />
    </div>
  );
}

export default App;
