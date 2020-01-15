import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { dummyApi } from 'api'
import { take } from 'ramda'

const initialState = {
  loading: false,
  error: null,
  data: []
}

export const dummy = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    setDummy: (state, action) => {
      const { loading = false, error = null, data = [] } = action.payload
      state.loading = loading
      state.error = error
      state.data = data
    }
  }
})

export const { setDummy } = dummy.actions

export default dummy.reducer

export const searchDummy = query =>
  async (dispatch, getState) => {
    dispatch(setDummy({ loading: true }))

    try {
      const data = await dummyApi.searchDummy(query)
      dispatch(setDummy({ loading: false, data }))
    } catch (error) {
      dispatch(setDummy({ loading: false, error }))
    }
  }

export const loadingSelector = createSelector(
  state => state.dummy.loading,
  loading => loading
)

export const errorSelector = createSelector(
  state => state.dummy.error,
  error => error
)

export const dataSelector = createSelector(
  state => state.dummy.data,
  data => take(3, data)
)
