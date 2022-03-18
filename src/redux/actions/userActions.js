import axios from "axios";

const userActions = {

    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            
            const res = await axios.post('http://localhost:4000/api/V1/auth/signUp',{userData})
            console.log(res)
            console.log(userData);
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }})
                console.log(userData);
        }
    },
        signInUser: (logedUser) => {
            
            return async(dispatch, getState) => {
                
                const user = await axios.post('http://localhost:4000/api/V1/auth/signIn', {logedUser})
                console.log(user.data);
                if(user.data.success){
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({type: 'user', payload: user.data.response.userData})
                }

                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }})
            }
        },
    SignOutUser: (closeuser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/V1/auth/signOut',{closeuser})
            localStorage.removeItem('token')
            dispatch({type: 'user', payload: null})
        }
    }
}
export default userActions;