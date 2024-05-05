import {configureStore} from '@reduxjs/toolkit'
import userslice from './userslice'
import blogslice from './blogslice'

const store = configureStore({
    reducer: {
        user: userslice,
        blog: blogslice
    }
})

export default store