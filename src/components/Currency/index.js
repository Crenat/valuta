// Libraries
import React, { useRef } from 'react';

import { Card } from '../../ui/Card'
import { Col, Input, Row, Typography } from 'antd'
import { Statistic } from 'antd/es'

const { Title } = Typography

export const Currency = ({ txt, rate, cc, exchangedate }) => {
  const [value, setValue] = React.useState(1)
  const [result, setResult] = React.useState(value * rate)
  const handleUahChange = (e) => {
    console.log({ e })
    setValue(e.target.value)
    setResult(e.target.value * rate)
  }

  const inputRef = useRef();

  const handleCurrencyChange = (e) => {
    console.log({ e })
    setValue(e.target.value / rate)
    setResult(e.target.value)
  }
  return (
    <Card title={cc} className="currency">
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Title level={3}>{txt}</Title>
        </Col>
        <Col span={12}>
          <Title level={3}><Statistic valueStyle={{ color: '#3f8600' }} value={rate} precision={2} suffix={cc.toUpperCase()} /></Title>
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Input addonBefore={cc} value={value} onChange={handleUahChange} />
        <Input
          addonBefore="UAH"
          value={result}
          onChange={handleCurrencyChange}
          ref={inputRef}
          onClick={() => {
            inputRef.current.focus({
              cursor: 'all',
          });
        }} />
      </Row>
      <span>{exchangedate}</span>
    </Card>
  )
}