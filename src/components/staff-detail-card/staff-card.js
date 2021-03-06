import React, {Component} from 'react'
import {Card, Row, Col} from 'antd'
import Reviews from '../reviews'
import './staff-detail-card.css'
const {Meta} = Card
class StaffDetailCard extends Component {
  render() {
    const {staff} = this.props
    return (
      <main role="main" className="staff-detail-wrapper">
        <Row type="flex" justify="center" gutter={[16, 16]}>
          <Col>
            <Card
              style={{width: 300}}
              cover={<img alt="example" src={staff.avatar} />}
            >
              <Meta
                title={`${staff.name} ${staff.surname}`}
                description={staff.post}
              />
            </Card>
          </Col>
        </Row>
        <Reviews staff={staff} id={staff.id} />
      </main>
    )
  }
}

export default StaffDetailCard
