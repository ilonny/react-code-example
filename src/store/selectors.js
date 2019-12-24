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
