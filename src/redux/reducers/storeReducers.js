
export const isLoggedInReducer = (state = null, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return action.payload
        default:
            return state;
    }
}
