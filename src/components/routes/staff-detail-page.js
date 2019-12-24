import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import StaffDetailCard from '../staff-detail-card'

class StaffListPage extends Component {
  render() {
    const id = this.props.match.params.id
    return <StaffDetailCard id={id} />
  }
}

export default withRouter(StaffListPage)
