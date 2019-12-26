import {createSelector} from 'reselect'

export const selectStaffs = state => state.staff.entities
export const selectStaffsLoaded = state => state.staff.loaded
export const selectStaffsLoading = state => state.staff.loading

export const selectId = (_, ownProps) => ownProps.id

export const selectStaff = createSelector(
  selectStaffs,
  selectId,
  (staffs, id) => {
    return staffs.find(staff => staff.id === id)
  }
)

export const selectReviews = state => state.reviews.entities
export const selectReviewsLoaded = state => state.staff.loaded
export const selectReviewsLoading = state => state.staff.loading

// export const selectStaffReviews = createSelector()
export const selectStaffReviews = createSelector(
  selectReviews,
  selectStaffs,
  selectId,
  (reviews, staffs, staff_id) => {
    console.log('selectReviews', selectReviews)
    console.log('selectStaffs', selectStaffs)
    console.log('selectId', selectId)
    console.log('reviews, staffs, staff_id', reviews, staffs, staff_id)

    // return reviews.find(review => review.id === id)
  }
)
