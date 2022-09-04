// Libraries
import React from 'react';

// Styles
import './App.css';
import 'antd/dist/antd.css';

// Components
import { Layout, Select, Typography } from 'antd';
import { Section } from './ui/Section'

// Hooks
import { useEffect, useState } from 'react';
import { Currency } from './components/Currency'
import { Skeleton } from 'antd/es'
import { Option } from 'antd/es/mentions'

const { Title } = Typography;
const { Content } = Layout;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  const fetchCurrencies = async () => {
    setIsLoading(true);
    // const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json();
    setCurrencies(data);
    setFilteredCurrencies(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(currencies.length < 1) {
      fetchCurrencies();
    }
  })

  const handleChange = (selectedCurrencies) => {
    console.log({ selectedCurrencies})
    const filteredCurrencies = currencies.filter(currency => selectedCurrencies.includes(currency.cc))
    setFilteredCurrencies(filteredCurrencies.length > 0 ? filteredCurrencies : currencies);
    console.log({ filteredCurrencies, currencies })
  }

  const handleSearch = (value) => {
    const filteredCurrencies = currencies.filter(currency => currency.txt.toLowerCase().includes(value.toLowerCase()))
    setFilteredCurrencies(filteredCurrencies.length > 0 ? filteredCurrencies : currencies);
  }

  return (
    <div className="App">
      <Content style={{ padding: '1rem' }}>
        <Title style={{ marginBottom: '2rem' }}>Dashboard</Title>
        <Section title="Курси валют">
          <Title level={3}>Оновлено о: {new Date().toString()}</Title>
          <Skeleton loading={isLoading} />
          <Select
            loading={isLoading}
            mode="multiple"
            size="large"
            style={{ width: '100%', marginBottom: '1rem' }}
            onSearch={handleSearch}
            placeholder="Оберіть валюти длля відображення"
            onChange={handleChange}
            optionLabelProp="label">
            {currencies.map((currency) => (
              <Select.Option key={currency.cc} label={currency.txt}>
                <div>
                  {currency.cc} - {currency.txt}
                </div>
              </Select.Option>
            ))}
          </Select>
          <div className="currencies_container">
            {!isLoading && filteredCurrencies.map(currency => {
              return (
                  <Currency key={currency.cc} {...currency} />
                )
            })}
          </div>
        </Section>
      </Content>
    </div>
  );
}

export default App;
