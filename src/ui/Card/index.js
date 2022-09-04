// Components
import { Card as SCard, Typography } from 'antd'

// Style
import '../Section/style.css'

export const Card = ({ title, children }) => {
  return (
    <SCard className="border" style={{ width: '23.5%' }}>
      {title && <Typography.Title level={2} style={{ marginTop: '0' }}>{title}</Typography.Title>}
      {children}
    </SCard>
  )
}