import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import {Typography} from 'antd'
import i18n from '../../decorators/i18n'
import {
  selectStaffReviews,
  selectReviewsLoaded,
  selectReviewsLoading,
} from '../../store/selectors'
import {loadReviews} from '../../store/actions'
const {Title} = Typography
class Reviews extends Component {
  componentDidMount() {
    // !this.props.loaded && this.props.fetchData()
  }
  render() {
    console.log('Reviews props', this.props)
    const {t} = this.props
    return (
      <div className="reviews-wrapper">
        <Title>{t('reviews')}</Title>
      </div>
    )
  }
}
export default connect(
  state => ({
    reviewsLoading: selectReviewsLoading(state),
    loaded: selectReviewsLoaded(state),
    reviews: selectStaffReviews(state),
  }),
  (dispatch, ownProps) => ({
    fetchData: dispatch(loadReviews(ownProps.staff.id)),
  })
)(i18n(Reviews))
