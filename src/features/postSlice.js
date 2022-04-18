import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: {

    },
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        loadPosts: (state, action) => {
           
        }
       
    }

})



export const { loadPosts } = postsSlice.actions;
export default postsSlice.reducer;