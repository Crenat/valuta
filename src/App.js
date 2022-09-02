// Styles
import './App.css';
import 'antd/dist/antd.css';

// Components
import { Col, Layout, Row, Typography } from 'antd';
import { Section } from './ui/Section'

// Hooks
import { useEffect, useState } from 'react';
import { Currency } from './components/Currency'
import { Skeleton } from 'antd/es'

const { Title } = Typography;
const { Content } = Layout;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState([]);

  const fetchCurrencies = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await response.json();
    setCurrencies(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(currencies.length < 1) {
      fetchCurrencies();
    }
  })

  return (
    <div className="App">
      <Content style={{ padding: '1rem' }}>
        <Title style={{ marginBottom: '2rem' }}>Dashboard</Title>
        <Section title="Курси валют">
          <Title level={3}>Оновлено о: {new Date().toString()}</Title>
          <Skeleton loading={isLoading} />
          <Row gutter={[16, 16]}>
            {!isLoading && currencies.map(currency => {
              return (
                <Col span={8} md={{ display: 'none' }}>
                  <Currency {...currency} />
                </Col>
                )
            })}
          </Row>
        </Section>
      </Content>
    </div>
  );
}

export default App;
