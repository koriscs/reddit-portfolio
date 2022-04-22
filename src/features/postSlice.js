import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async ({searchTerm, categories}) => {
        if(!searchTerm) {
      const response = await fetch(`https://www.reddit.com/${categories}.json`);
      const json = await response.json(); 
      const data = json.data.children.map(postdata => postdata.data);
        return data;
        } else {
                const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
                const json = await response.json(); 
                const searchData = json.data.children.map(postdata => postdata.data);
            return searchData;
        }
    }
  )
  
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        searchTerm: '',
        categories:'best',
    },
    reducers: {
       manageSearchTerm: (state,action) => {
           state.searchTerm = action.payload
       },
       manageCategories: (state,action) => {
        state.categories = action.payload
      },
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }

})

export const selectData = (state) =>state.posts.posts;
export const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectCategories =(state) => state.posts.categories;
export const isLoading = state => state.posts.isLoading;

export const { manageSearchTerm, manageCategories } = postsSlice.actions;
export default postsSlice.reducer;