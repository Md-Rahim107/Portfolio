import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modalOpen:     false,
    modalType:     null,   // 'project' | 'blog'
    activeSection: 'home',
    menuOpen:      false,
  },
  reducers: {
    openModal(state, action) {
      state.modalOpen = true
      state.modalType = action.payload
    },
    closeModal(state) {
      state.modalOpen = false
      state.modalType = null
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },
    closeMenu(state) {
      state.menuOpen = false
    },
  },
})

export const {
  openModal,
  closeModal,
  setActiveSection,
  toggleMenu,
  closeMenu,
} = uiSlice.actions

export default uiSlice.reducer
