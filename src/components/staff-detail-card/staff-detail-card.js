import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import i18n from '../../decorators/i18n'
import {selectStaff, selectStaffsLoading} from '../../store/selectors'
import {loadStaff} from '../../store/actions'
import StaffCard from './staff-card'
import Loader from '../loader'
class StaffDetailCard extends Component {
  componentDidMount() {
    const {id, staff, fetchStaff} = this.props
    !staff && fetchStaff(id)
  }
  render() {
    const {staff} = this.props
    return staff ? <StaffCard staff={staff} /> : <Loader />
  }
}
export default connect(
  (state, ownProps) => ({
    staff: selectStaff(state, {id: parseInt(ownProps.id)}),
    staffsLoading: selectStaffsLoading(state),
  }),
  (dispatch, ownProps) => ({
    fetchStaff: () => {
      dispatch(loadStaff(ownProps.id))
    },
  })
)(i18n(StaffDetailCard))
