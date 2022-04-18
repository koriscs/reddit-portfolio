import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

function datatrimming(raw) {
    const trimmeddata = raw.map(post => ({
        subreddit_name_prefixed: post.subreddit_name_prefixed,
            author: post.author,
            created_utc: post.created_utc,
            title: post.title,
            ups: post.ups,
            num_comments: post.num_comments,
            preview: post.preview.images[0].source.url,
            post_hint: post.post_hint,
            selftext: post.selftext,
            self: post.self,
            url_dest: post.url_overridden_by_dest,
            url: post.url,
            media: post.media,
            thumbnail: post.thumbnail,
            permalink: post.permalink
    
    }))
    console.log(trimmeddata);
    return trimmeddata
}



export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
      const response = await fetch(`https://www.reddit.com/best.json`);
      const json = await response.json();
      console.log(json);  
      const data = json.data.children.map(postdata => postdata.data);
      console.log(data);

        return data
      
    }
  )




export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
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


//export const { loadPosts } = postsSlice.actions;
export default postsSlice.reducer;