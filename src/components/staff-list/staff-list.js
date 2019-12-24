import React, {Component} from 'react'
import {List, Row, Typography} from 'antd'
import connect from 'react-redux/es/connect/connect'
import i18n from '../../decorators/i18n'
import Loader from '../loader'
import {
  selectStaffs,
  selectStaffsLoaded,
  selectStaffsLoading,
} from '../../store/selectors'
import {loadStaffs /*, loadReviews*/} from '../../store/actions'
import Staff from '../staff'
class StaffList extends Component {
  componentDidMount() {
    !this.props.loaded && this.props.fetchData()
  }
  renderStaff = staff => <Staff key={staff.id} staff={staff} />
  render() {
    const {staffs, staffsLoading, t} = this.props
    return staffsLoading ? (
      <Loader />
    ) : (
      <>
        <Typography.Title style={{textAlign: 'center'}}>
          {t('staff list')}
        </Typography.Title>
        <Row className="staff-list">
          <List
            itemLayout={'horizontal'}
            dataSource={staffs}
            renderItem={this.renderStaff}
          />
        </Row>
      </>
    )
  }
}

export default connect(
  state => ({
    staffsLoading: selectStaffsLoading(state),
    loaded: selectStaffsLoaded(state),
    staffs: selectStaffs(state),
  }),
  dispatch => ({
    fetchData: () => {
      dispatch(loadStaffs())
      //   dispatch(loadReviews())
    },
  })
)(i18n(StaffList))
