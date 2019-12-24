import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import i18n from '../../decorators/i18n'
import {selectStaff} from '../../store/selectors'
// import 'staff-detail-card.css'
class StaffDetailCard extends Component {
  render() {
    console.log('staff props', this.props)
    const {id} = this.props
    return (
      <div>
        <p>Staff detail {id}</p>
      </div>
    )
  }
}
export default connect((state, ownProps) => ({
  staff: selectStaff(state, {id: parseInt(ownProps.id)}),
}))(i18n(StaffDetailCard))
