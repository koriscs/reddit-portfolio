import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const loadCommentsByPost = createAsyncThunk(
    'comments/loadCommentsByPost',
    async(link) => {
        const response = await fetch(`https://www.reddit.com${link}.json?sort=top`)
        const json = await response.json()
        const data = json[1].data.children.map(comments => comments.data)
        const topComments = data.slice(1, 6)
        const commentsByPost = {
            link,
            topComments
        }
        return commentsByPost
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoading: false,
        isError: false
    },
    extraReducers: {
        [loadCommentsByPost.loading]: (state,action) =>{
            state.isLoading = true
            state.isError = false
        },
        [loadCommentsByPost.fulfilled] : (state,action) =>{
            state.comments[action.payload.link] = action.payload.topComments
            state.isLoading = false
            state.isError = false
        },
        [loadCommentsByPost.rejected]: (state,action) =>{
            state.isLoading = false
            state.isError = true
        }
    }
})

export default commentsSlice.reducer