export default (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                blogPosts: action.payload
            };
        case 'SET_POST':
            return {
                ...state,
                currentBlogPost: action.payload
            };
        case 'SENDING_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'REQUEST_FINISHED':
            return {
                ...state,
                loading: false
            };
        case 'ADD_POST':
             return {
                ...state,
                blogPosts: [...state.blogPosts , action.payload]
            };
         case 'DELETE_POST':
                return {
                   ...state,
                   blogPosts: state.blogPosts.filter((post) => post.id !== action.payload)
               }
        default:
            return state;
    }
};
