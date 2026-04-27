import { configureStore } from '@reduxjs/toolkit'
import uiReducer      from './uiSlice'
import projectReducer from './projectSlice'
import blogReducer    from './blogSlice'
import contactReducer from './contactSlice'

export const store = configureStore({
  reducer: {
    ui:      uiReducer,      // modal state, active nav, theme
    project: projectReducer, // projects list + selected project
    blog:    blogReducer,    // blog posts + selected post
    contact: contactReducer, // contact form fields + status
  },
})
