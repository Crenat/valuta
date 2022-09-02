// Libraries
import React from 'react';

import { Card } from '../../ui/Card'
import { Col, Row, Typography } from 'antd'
import { Statistic } from 'antd/es'

const { Title } = Typography

export const Currency = ({ ccy, base_ccy, buy, sale }) => {
  return (
    <Card title={ccy} style={{ minWidth: '300px' }}>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Title level={3}>куплю: <Statistic valueStyle={{ color: '#3f8600' }} value={buy} precision={2} suffix={base_ccy.toUpperCase()} /></Title>
        </Col>
        <Col span={12}>
          <Title level={3}>продам: <Statistic valueStyle={{ color: '#cf1322' }} value={sale} precision={2} suffix={base_ccy.toUpperCase()} /></Title>
        </Col>
      </Row>
    </Card>
  )
}