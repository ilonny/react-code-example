import React, {PureComponent} from 'react'
import {Col, Card, Avatar} from 'antd'
const {Meta} = Card
class Staff extends PureComponent {
  render() {
    const {staff} = this.props
    return (
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card hoverable={true}>
          <Meta
            avatar={<Avatar src={staff.avatar} />}
            title={`${staff.name} ${staff.surname}`}
            description={staff.post}
          />
        </Card>
      </Col>
    )
  }
}
export default Staff
