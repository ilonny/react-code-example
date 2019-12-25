import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect'
import {Typography} from 'antd'
import i18n from '../../decorators/i18n'
const {Title} = Typography
class Reviews extends Component {
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
  (state, ownProps) => ({}),
  (dispatch, ownProps) => ({})
)(i18n(Reviews))
