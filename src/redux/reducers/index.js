import * as actions from '../actions/action-types';

const InitialState = {
    users: [],
    loggedIn: false,
    currentUser: {}
}

export default function rootReducer(state=InitialState, action)  {
    switch (action.type){
        case actions.LOG_IN:
            const userIndex = state.users.indexOf(action.payload.content)
            if (userIndex >= 0){
                return {
                    ...state,
                    currentUser: state.users[userIndex],
                    loggedIn: true
                }
            }
            return state;
        case actions.SIGN_IN: 
            console.log("adding user...", action);
            return {
                ...state,
                users: [...state.users, action.payload.content],
                loggedIn: false
            }
        default:
            return state;
    }
}
