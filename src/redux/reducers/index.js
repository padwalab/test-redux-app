import * as actions from '../actions/action-types';

const InitialState = {
    users: [],
    loggedIn: false,
    currentUser: {}
}

export default function rootReducer(state=InitialState, action)  {
    switch (action.type){
        case actions.LOG_IN:
            if (action.payload.content.username === "" || action.payload.content.password === "" || state.users.length < 1){
                return state;
            }
            let i = 0;
            for (i=0; i< state.users.length; i++){
                if (state.users[i].username === action.payload.content.username && state.users[i].password === action.payload.content.password){
                    console.log("user: ",state.users[i].username); 
                    return {
                    ...state,
                    currentUser: state.users[i],
                    loggedIn: true
                }
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
        case actions.LOG_OUT:
            console.log("logging the user out...");
            return{
                ...state,
                currentUser: {},
                loggedIn: false
            }
        default:
            return state;
    }
}
