// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// Types
import { LoginPropsType } from '~/@types/login';

// Styles
import '~/resources/assets/scss/partials/_header.scss';

export default (props: LoginPropsType) => {

    let SaveJobsJsx = (
        <>
            <h5 className="btn--saved_jobs"><Link to="/applied-jobs">Applied Jobs</Link></h5>
            <h5 className="btn--saved_jobs"><Link to="/saved-jobs">Saved Jobs</Link></h5>
        </>
    );

    let authenticated;
    if (props.userAuth.isAuthenticated === true) {
        authenticated = (
            <div className="flex-container">
                {SaveJobsJsx}
                <h5><Link to="/profile">{props.userAuth.username}</Link></h5>
            </div>
        );
    } else {
        authenticated = (
            <div className="flex-container">
                {SaveJobsJsx}
                <h5><Link to="/" onClick={() => props.setAuthUser()} >Log in</Link></h5>
                <h5 className="btn--create_acc"><Link to="/signup">Create Account</Link></h5>
            </div>
        );
    }

    return (
        <div className="top-header">
            <div className="container">
                {authenticated}
            </div>
        </div>
    );
};