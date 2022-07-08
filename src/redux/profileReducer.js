const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'First post', username: 'nurik2160'},
        {id: 2, message: 'Second post', username: 'Dauren'},
        {id: 3, message: 'Third post', username: 'Kusaiyn'},
    ],
    postInputMessage: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.postInputMessage,
                    username: 'nurik2160'}
                ]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postInputMessage: action.payload,
            }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (postInputMessage) => ({type: UPDATE_NEW_POST_TEXT, payload: postInputMessage})

export default profileReducer