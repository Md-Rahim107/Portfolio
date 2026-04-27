import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk simulates an API call — replace with real fetch()
export const submitContact = createAsyncThunk(
  'contact/submit',
  async (formData) => {
    await new Promise((r) => setTimeout(r, 1800))
    // throw new Error('Network error') // uncomment to test error state
    return { success: true, message: 'Message sent successfully!' }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    fields: {
      name:    '',
      email:   '',
      subject: '',
      message: '',
    },
    touched: {},
    errors:  {},
    status:  'idle', // 'idle' | 'loading' | 'success' | 'error'
    errorMsg: '',
  },
  reducers: {
    setField(state, action) {
      const { name, value } = action.payload
      state.fields[name] = value
      // re-validate if already touched
      if (state.touched[name]) {
        state.errors[name] = validateField(name, value)
      }
    },
    touchField(state, action) {
      const { name, value } = action.payload
      state.touched[name] = true
      state.errors[name]  = validateField(name, value)
    },
    setSubject(state, action) {
      state.fields.subject = action.payload
      if (state.touched.subject) {
        state.errors.subject = action.payload ? '' : 'Please pick a subject'
      }
    },
    touchAll(state) {
      const fields = state.fields
      state.touched = { name: true, email: true, subject: true, message: true }
      state.errors  = {
        name:    validateField('name',    fields.name),
        email:   validateField('email',   fields.email),
        subject: fields.subject ? '' : 'Please pick a subject',
        message: validateField('message', fields.message),
      }
    },
    resetForm(state) {
      state.fields  = { name: '', email: '', subject: '', message: '' }
      state.touched = {}
      state.errors  = {}
      state.status  = 'idle'
      state.errorMsg = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = 'success'
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status   = 'error'
        state.errorMsg = action.error.message || 'Something went wrong.'
      })
  },
})

// pure validation helper (used inside reducers)
function validateField(name, value) {
  if (!value.trim()) return 'This field is required'
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return 'Enter a valid email address'
  if (name === 'name' && value.trim().length < 2)
    return 'At least 2 characters required'
  if (name === 'message' && value.trim().length < 20)
    return 'At least 20 characters required'
  return ''
}

export const { setField, touchField, setSubject, touchAll, resetForm } = contactSlice.actions
export default contactSlice.reducer
