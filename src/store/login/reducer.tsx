// Types
import { ReducerActions } from '~/@types/reducers';
import { LoginType } from '~/@types/login';

const initialState: LoginType = {
    user_id:         null,
    email:           null,
    username:        null,
    isAuthenticated: null,
    token:           null
};

export const LoginReducers = ( state = initialState, actions: ReducerActions<LoginType> ) => {

    switch (actions.type) {

        case 'SET_AUTH_USER':
            return {
                ...state,
                user_id:         980,
                username:        'Jose Burgos',
                email:           'jose@careernowbrands.com',
                isAuthenticated: true,
                token:           'ZKsafK2fjK,S92LKSI%292K_#@ALSIsks'
            };

        default:
            return state;
    }
};