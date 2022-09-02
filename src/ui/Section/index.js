// Components
import { Card, Typography } from 'antd'

// Styles
import './style.css'
import { forwardRef } from 'react'

const { Title } = Typography

export const Section = forwardRef(({ title, children, ...props }, ref) => {
  return (
    <Card {...props} ref={ref}>
      <Title level={2} style={{ marginTop: '0' }}>{title}</Title>
      {children}
    </Card>
  )
})
