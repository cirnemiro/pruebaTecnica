import { combineReducers } from 'redux';

import auth from './auth/auth-reducer';
import user from './user/user-reducer';


const RESET_STORE_AND_LOG_OUT = 'RESET_STORE_AND_LOG_OUT';

export const resetStoreAndLogOut = () => ({
    type: RESET_STORE_AND_LOG_OUT,
});

const appReducer = combineReducers({
    auth,
    user,
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE_AND_LOG_OUT) {
        state = undefined;
        localStorage.clear();
    }

    return appReducer(state, action);
};

export default rootReducer;
