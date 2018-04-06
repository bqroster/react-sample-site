// Login types

// Type needed for the UI only
export type LoginUI = {
    user_id:        number | null,
    username:       string | null,
    isAuthenticated:  boolean | null,
};

// Type needed for the BACK END only
export type LoginBE = {
    email:          string | null,
    token:          string | null
};

// LoginType UI & BackEnd union
export type LoginType = LoginUI & LoginBE;

export type LoginMapState = {
    userAuth: LoginUI
};

export type LoginMapDispatch = {
    setAuthUser: () => {}
};

// Class Props and State Types
export type LoginPropsType = LoginMapState & LoginMapDispatch;