
export const isLoggedIn = (user) => {
    if(user) {
        localStorage.setItem('user', JSON.stringify(user));
    } 

    return setUser()
}

export const setUser = () => {
    const store = JSON.parse(localStorage.getItem('user'));

    if (store) {
        return {
            type: 'USER_LOGIN',
            payload: store
        }
    } else {
        return {
            type: 'USER_LOGIN',
            payload: null
        }
    }
}
