// React-Redux
import { connect, Dispatch } from 'react-redux';

// Types
import { StoreType } from '~/store/reducers';
import { LoginMapState, LoginMapDispatch, LoginUI } from '~/@types/login';

// Class to connect
import App from '~/app/App';

const mapStateToProps = (state: StoreType) => {

    const loginNull: LoginUI = {
        user_id: null,
        username: null,
        isAuthenticated: null
    };

    const loginData: LoginUI = {
        user_id: state.login.user_id,
        username: state.login.username,
        isAuthenticated: state.login.isAuthenticated
    };

    return {
        userAuth: (state.login.isAuthenticated === true) ? loginData : loginNull
    };
};

const mapDispatchToProps = (dispatch: Dispatch<StoreType>) => {
    return {
        setAuthUser: () => dispatch({type: 'SET_AUTH_USER'})
    };
};

export const cnntApp = connect<LoginMapState, LoginMapDispatch>(mapStateToProps, mapDispatchToProps)(App);