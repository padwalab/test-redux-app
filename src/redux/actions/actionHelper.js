import * as actions from '../actions/action-types';

export const signInUser = (content) => ({
    type: actions.SIGN_IN,
    payload: {
        content
    }
})

export const logInUser = (content) => ({
    type: actions.LOG_IN,
    payload:{
        content
    }
})