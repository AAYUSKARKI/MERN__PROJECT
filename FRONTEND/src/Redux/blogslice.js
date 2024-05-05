import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: null,
        loading: false,
        error: null,
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;

        }
    },
})

export const { setBlogs, setLoading, setError } = blogSlice.actions;

export default blogSlice.reducer